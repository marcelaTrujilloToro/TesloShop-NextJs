import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../interfaces/products';

type Data =
  | { message: string }
  | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      return getProductsBySlug(req, res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const getProductsBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  await db.connect();

  const { slug } = req.query;

  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    })
  }

  return res.status(200).json(product);

}