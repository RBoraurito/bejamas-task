import { createContext } from "react"

export const initialState: {
  currentPage: number;
  setPage(page:number ): void;
  filters: Filters;
  setFilters(filters: Filters): void;
  showFilters: boolean,
  setShowFilters(show: boolean): void,
  showCart: boolean;
  setShowCart(show: boolean): void;
} = {
  currentPage: 1,
  setPage: (page:number ) => {},
  filters: {
    sort: ['ASC', 'price'],
    categories: [],
    price: ''
  },
  setFilters: (filters: Filters) => {},
  showFilters: false,
  setShowFilters: (show: boolean) => {},
  showCart: false,
  setShowCart: (show: boolean) => {}
}

export const Context = createContext(initialState)