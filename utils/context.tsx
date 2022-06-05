import { createContext } from "react"

export const initialState = {
  currentPage: 1,
  setPage: (page:number ) => {},
  filters: {
    sort: ['ASC', 'price']
  },
  setFilters: (filters: Filters) => {},
  showFilters: false,
  setShowFilters: (show: boolean) => {},
  showCart: false,
  setShowCart: (show: boolean) => {}
}

export const Context = createContext(initialState)