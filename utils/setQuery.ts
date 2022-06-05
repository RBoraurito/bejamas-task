export const setQuery = (currentPage: number, filters: Array<string[]>) => {
  let query = '?'
  if(filters) {
    query+= new URLSearchParams(filters).toString()
  }
  if(currentPage){
    query+= filters ? `&page=${currentPage}` : `page=${currentPage}`
  }
  return query !== '?' && query 
}