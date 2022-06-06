import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Context, initialState } from 'utils/context'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState<number>(initialState.currentPage)
  const [filters, setFilters] = useState<Filters>(initialState.filters)
  const [showFilters, setShowFilters] = useState<boolean>(initialState.showFilters)
  const [showCart, setShowCart] = useState<boolean>(initialState.showCart)
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    if(cart.some(art => art.name === product.name)) return;
    setCart([...cart, product])
    setShowCart(true)
  }

  return (
    <Context.Provider value={{
      currentPage: page,
      setPage,
      filters,
      setFilters,
      showFilters,
      setShowFilters,
      showCart,
      setShowCart,
      cart,
      addToCart,
      clearCart: () => setCart([])
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
