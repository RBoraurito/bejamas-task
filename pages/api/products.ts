import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";

type Data = {
  pages: number;
  data: DocumentData[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|FirebaseError>
) {
  const { page, priceRange, category, orderBy} = req.query

  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where('featured', '==', false))
    const snapshots = await getDocs(q);
    const data = snapshots.docs.map((doc) => doc.data()).reduce<Array<DocumentData[]>>((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/6)
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
      resultArray[chunkIndex].push(item)
      return resultArray
    }, [])
    res.status(200).json({
      pages: data.length,
      data: data[Number(page) - 1 || 0]
    })
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: error
    })
  }
}
