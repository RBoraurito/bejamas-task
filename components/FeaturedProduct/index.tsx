import React, { useContext } from 'react'
import Image from 'next/image'
import { loader } from 'utils/imgLoader'
import { Context } from 'utils/context'

export const FeaturedProduct = ({
  featuredProduct
}: {featuredProduct: FeaturedProduct}) => {
  const { addToCart } = useContext(Context)

  return (
    <section>
      <div className="flex justify-between mb-0 sm:mb-7 items-center">
        <h1 className="text-h1 text-black mb-9 sm:mb-0 font-bold">
          {featuredProduct.name}
        </h1>
        <button className="hidden sm:block text-white bg-black py-3 px-7 font-medium" onClick={() => addToCart(featuredProduct)}>
          ADD TO CART
        </button>
      </div>
      <figure className='relative mb-7 sm:mb-12 h-[239px] sm:h-[420px] lg:h-[553px]'>
        <Image
          loader={loader}
          layout="fill"
          objectFit="cover"
          width={1290}
          height={553}
          src={featuredProduct.image.src}
          alt={featuredProduct.image.alt}
        />
        <figcaption className='bg-white px-10 sm:px-12 py-5 sm:py-6 text-black font-bold text-parragraph-2 absolute left-0 bottom-0'>
          Photo of the Day
        </figcaption>
      </figure>
      <button className="sm:hidden inline-block w-full text-white bg-black py-3 text-center font-medium mb-8">
        ADD TO CART
      </button>
      <div className="sm:flex sm:space-x-[174px] sm:justify-between mb-12 sm:mb-16">
        <div className="mb-8 sm:mb-0">
          <h2 className="text-lead mb-2 font-bold">
            About {featuredProduct.name}
          </h2>
          <h4 className="text-lead text-gray-400 capitalize mb-3">
            {featuredProduct.category}
          </h4>
          <p className="text-parragraph text-gray-400">
            {featuredProduct.details.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <h5 className="text-black font-bold text-lead mb-8 sm:text-right">
            Peole also buy
          </h5>
          <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-14">
            {featuredProduct.details.recomendations.map(img => (
              <Image
                key={img.src}
                src={img.src}
                width={117}
                height={147}
                alt={img.alt}
                objectFit="cover"
                className="w-[98px] h-[123px] sm:w-[117px] sm:h-[147px]"
              />
            ))}
          </div>
          <h6 className="text-black text-lead mb-4 font-bold sm:text-right">
            Details
          </h6>
          <p className="mb-4 text-cap text-gray-400 sm:text-right">
            Size: {featuredProduct.details.dimentions.width} X {featuredProduct.details.dimentions.height} pixels
          </p>
          <p className="text-cap text-gray-400 sm:text-right">
            Size: {(featuredProduct.details.size / 1000).toFixed(0)} mb
          </p>
        </div>
      </div>
    </section>
  )
}
