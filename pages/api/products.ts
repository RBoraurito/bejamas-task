import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDoc, getDocs, query, where } from "firebase/firestore";

type Data = {
  pages: number;
  data: DocumentData[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|FirebaseError>
) {
  let { page, priceRange, category, sort} = req.query
  
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where('featured', '==', false))
    const snapshots = await getDocs(q);
    let data = await Promise.all(snapshots.docs
      .map(async (doc) => ({
        ...doc.data(),
        category: ((await getDoc(doc.data().category)).data() as {name: string})?.name
      })))
    if(sort) {
      sort = (sort as string).split(',')
      console.log(sort)
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
    }, [])[Number(page) -1 | 0]
    res.status(200).json({
      pages: formattedData.length,
      data: formattedData
    })
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: error
    })
  }
}
