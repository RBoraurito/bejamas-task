import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Context, initialState } from 'utils/context'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState<number>(initialState.currentPage)
  const [filters, setFilters] = useState<Filters>(initialState.filters)
  const [showFilters, setShowFilters] = useState<boolean>(initialState.showFilters)
  const [showCart, setShowCart] = useState<boolean>(initialState.showCart)

  return (
    <Context.Provider value={{
      currentPage: page,
      setPage: setPage,
      filters: filters,
      setFilters: setFilters,
      showFilters: showFilters,
      setShowFilters: setShowFilters,
      showCart: showCart,
      setShowCart: setShowCart
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
