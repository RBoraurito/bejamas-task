import React, { useContext } from 'react'
import { Chevron } from 'components/icons/chevron'
import { Context } from 'utils/context';

type PaginationProps = {
  pages: number;
  handleSelect?(page: number): void;
}

export const Pagination = ({
  pages,
  handleSelect
}: PaginationProps) => {
  const { setPage, currentPage } = useContext(Context)

  const prev = () => {
    if(currentPage === 1) return
    setPage(currentPage - 1)
  }
  const next = () => {
    if(currentPage === pages) return
    setPage(currentPage + 1)
  }

  return (
    <div className="flex items-center space-x-3 w-fit mx-auto">
      <button className={`rotate-90 ${currentPage === 1 && 'hidden'}`} onClick={prev}>
        <Chevron width={16} height={8} />
      </button>
      <div className='inline-flex space-x-3'>
        {Array(pages).fill('').map((btn, index) => (
          <button
            key={index}
            className={`text-h2 ${currentPage === (index + 1) ? 'text-black font-semibold' : 'text-gray-200'}`}
            onClick={() => setPage(index+1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className={`-rotate-90 ${currentPage === Array(pages).fill('').length && 'hidden'}`} onClick={next}>
        <Chevron width={16} height={8} />
      </button>
    </div>
  )
}
