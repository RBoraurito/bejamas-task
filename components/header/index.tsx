import React, { useContext } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'components/icons/shopping-cart'
import { Context } from 'utils/context'
import { CartModal } from 'components/CartModal'

export const TheHeader = () => {
  const { setShowCart, showCart, cart } = useContext(Context)
  return (
    <>
      <header className="bg-white px-8 pb-9 pt-10 border-b-4 border-gray-100 flex justify-between fixed top-0 left-0 right-0 w-full xxl:px-24 mx-auto z-10">
        <Image src="/img/logo.svg" alt="Bejama's logo" className="h-5" height={26} width={159} />
        <button onClick={() => cart.length > 0 && setShowCart(!showCart)} className="relative">
          <ShoppingCart width={32} height={32} />
          {cart.length > 0 && (
            <span className="bg-black text-white px-1 font-bold text-parragraph-2 absolute -bottom-3 -right-2">
              {cart.length}
            </span>
          )}
          {showCart && <CartModal />}
        </button>
      </header>
      <style jsx>{`
        @media (min-width: 640px) {
          header {
            max-width: calc(100vw - 2rem);
          }
        }
        @media (min-width: 1322px) {
          header {
            max-width: 1290px;
          }
        }
      `}</style>
    </>
  )
}
