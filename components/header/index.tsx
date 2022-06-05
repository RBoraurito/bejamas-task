import React from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'components/icons/shopping-cart'

export const Header = () => {
  return (
    <>
      <header className="bg-white px-8 pb-9 pt-10 border-b-4 border-gray-100 flex justify-between fixed top-0 left-0 right-0 w-full xxl:px-24 mx-auto z-10">
        <Image src="/img/logo.svg" alt="Bejama's logo" className="h-5" height={26} width={159} />
        <ShoppingCart width={32} height={32} />
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
