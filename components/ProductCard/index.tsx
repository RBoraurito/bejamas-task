import React, { useContext } from 'react'
import Image from 'next/image'
import { Context } from 'utils/context';

type ProductCardProps = {
  product: Product;
}

export const ProductCard = ({
  product
}: ProductCardProps) => {
  const { addToCart } = useContext(Context)

  return (
    <div className="lg:max-w-[282px] mb-8 sm:mb-0">
      <style jsx>{`
        figure:hover button {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      <figure className="mb-2 relative">
        {product.bestseller && (
          <figcaption className="bg-white py-2 px-3 text-black text-parragraph-2 top-0 left-0 absolute">
            Best Seller
          </figcaption>
        )}
        <Image
          src={product.image.src}
          alt={product.image.alt}
          layout="responsive"
          width={282}
          height={390}
          loading="lazy"
          objectFit="cover"
          objectPosition="center"
          className='w-full'
        />
        <button
          className="absolute bottom-0 bg-black py-2 inline-block w-full text-center text-white text-parragraph-2 font-medium uppercase invisible opacity-0 transition-all duration-300"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </figure>
      <h5 className="mb-1 text-parragraph-2 font-bold text-gray-400 capitalize">
        {product.category}
      </h5>
      <h4 className="mb-1 text-display text-black font-bold">
        {product.name}
      </h4>
      <p className="text-h2 text-gray-400">
        ${product.price}
      </p>
    </div>
  )
}
