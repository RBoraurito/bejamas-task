import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from 'utils/db'
import { collection, DocumentData, getDoc, getDocs, query, where } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentData|FirebaseError>
) {

  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where('featured', '==', true))
    const snapshots = await getDocs(q);
    const category = await getDoc(snapshots.docs[0].data().category)
    const data = {
      ...snapshots.docs[0].data(),
      category: (category.data() as { name: string }).name
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: error
    })
  }
}
