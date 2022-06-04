import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentData[]|FirebaseError>
) {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef)
    const snapshots = await getDocs(q);
    const data = snapshots.docs.map((doc) => doc.data())
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: error
    })
  }
}
