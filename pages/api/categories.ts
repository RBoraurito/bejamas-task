// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentData[]|Error>
) {
  try {
    const categoriesRef = collection(db, "categories");
    const q = query(categoriesRef)
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
