import React from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'components/icons/shopping-cart'

export const Header = () => {
  return (
    <>
      <header className="px-8 pb-9 pt-10 border-b-4 border-gray-100 flex justify-between fixed top-0 w-full sm:mx-24">
        <Image src="/img/logo.svg" alt="Bejama's logo" className="h-5" height={26} width={159} />
        <ShoppingCart width={32} height={32} />
      </header>
      <style jsx>{`
        @media (min-width: 640px) {
          header {
            width: calc(100% - 192px);
          }
        }
      `}</style>
    </>
  )
}
