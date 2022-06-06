import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDocs, query, where, WhereFilterOp } from "firebase/firestore";

type Data = {
  pages: number;
  data: DocumentData[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|FirebaseError>
) {
  let { page, price, categories, sort} = req.query
  
  try {
    const productsRef = collection(db, "products");
    let constraints = [where('featured', '==', false)]
    if(categories){
      categories = (categories as string).split(',')
      constraints = [...constraints, where('category', 'in', categories)]
    }
    if(price) {
      price = (price as string).split('|')
      const formattedPrice = (price as string[]).map(p => p.split(';'))
      const priceConstraints = formattedPrice.map((p: string[]) => where('price', (p[0] as WhereFilterOp), Number(p[1])))
      constraints = [...constraints, ...priceConstraints ]
    }
    const q = query(productsRef, ...constraints)
    const snapshots = await getDocs(q);

    let data = await Promise.all(snapshots.docs.map(async (doc) => doc.data()))

    if(sort) {
      sort = (sort as string).split(',')
      data = (data as Product[]).sort((a, b) => {
        if(sort[1] === 'price') {
          return sort[0] === 'ASC' ? 
            a.price - b.price :
            b.price - a.price 
        }
        return sort[0] === 'ASC' ? 
            (a.name > b.name ? 1 : -1) :
            a.name < b.name ? 1 : -1 
      })
    }
    const formattedData = (data as Product[])
    .reduce<Array<Product[]>>((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/6)
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
      resultArray[chunkIndex].push(item)
      return resultArray
    }, [])
    
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json({
      pages: formattedData.length,
      data: formattedData[Number(page) -1 | 0] || []
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      type: 'error',
      message: error
    })
  }
}
