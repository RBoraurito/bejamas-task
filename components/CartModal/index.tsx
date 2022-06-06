import React, { useContext } from 'react'
import { Context } from 'utils/context'
import { Close } from 'components/icons/close'
import Image from 'next/image'
import { loader } from 'utils/imgLoader'

export const CartModal = () => {
  const { setShowCart, showCart, cart, clearCart } = useContext(Context)
  return (
    <div className="bg-white border-4 border-gray-100 p-6 absolute top-16 sm:top-20 -right-7 sm:right-0 w-[340px] sm:w-[448px]">
      <button onClick={() => setShowCart(false)} className="ml-auto w-fit block mb-7">
        <Close />
      </button>
      {cart.map(item => (
        <div key={item.name} className='flex space-x-3 justify-between mb-4 last:mb-0'>
          <div>
            <h5 className="text-black text-parragraph-2 mb-2 font-bold text-left">
              {item.name}
            </h5>
            <h6 className="text-gray-400 text-h2 text-left">
              ${item.price}
            </h6>
          </div>
          <figure className="flex-shrink-0">
            <Image
              loader={loader}
              src={item.image.src}
              alt={item.image.alt}
              width={149}
              height={86}
              objectFit="cover"
            />
          </figure>
        </div>
      ))}
      <hr className="border-b border-gray-150 mb-6" />
      <button
        className="border-4 border-black text-lead w-full text-center py-3"
        onClick={() => {
          clearCart()
          setShowCart(false)
        }}
      >
        CLEAR
      </button>
    </div>
  )
}
