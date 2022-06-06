export const setQuery = (currentPage: number, filters: Filters) => {
  let query = '?'
  if(filters) {
    query+= new URLSearchParams(filters as unknown as string).toString()
  }
  if(currentPage){
    query+= filters ? `&page=${currentPage}` : `page=${currentPage}`
  }
  return query !== '?' && query 
}