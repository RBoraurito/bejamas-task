import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { ProductCard } from 'components/ProductCard'
import { Pagination } from 'components/Pagination'
import { Filters } from 'components/Filters'
import { Sort } from 'components/icons/sort'
import { Filter } from 'components/icons/filter'
import { Context } from 'utils/context'

type ProductListProps = {
  products: Product[];
  categories: Categories;
  pages: number;
}

export const ProductList = ({
  products,
  categories,
  pages
}: ProductListProps) => {
  const [type, setType] = useState('price')
  const [direction, setDirection] = useState('ASC')
  const { setShowFilters, setFilters, filters } = useContext(Context)

  const handleTypeChange = (val:string) => {
    setType(val)
    const newFilter = {
      ...filters,
      sort: [filters.sort[0], val]
    }
    setFilters(newFilter)
  }

  const handleDirectionChange = (val: string) => {
    setDirection(val)
    const newFilter = {
      ...filters,
      sort: [val, filters.sort[1]]
    }
    setFilters(newFilter)
  }
  const [isLG, setIsLG] = useState(false)

  useEffect(() => {
    setIsLG(matchMedia('(min-width: 1024px)').matches)
  }, [isLG])

  return (
    <section>
      <div className="mb-16 flex justify-between items-center">
        <h3 className="font-bold text-parragraph leading-5 lg:text-h2 text-black">
          Photography / <span className="text-gray-300">Premium Photos</span>
        </h3>
        <button onClick={() => setShowFilters(true)} className="block lg:hidden">
          <Filter />
        </button>
        <span className="text-parragraph-2 text-gray-300 hidden lg:inline-flex items-center">
          <button
            className="mr-2"
            onClick={() => handleDirectionChange(filters.sort[0] === 'ASC' ? 'DES' : 'ASC')}
          >
            <Sort />
          </button>
          <span>
            Sort By
          </span>
          <select name="orderby" id="orderby" className="text-black ml-3" onInput={(e: ChangeEvent<HTMLSelectElement>) => handleTypeChange(e.target.value)}>
            <option value="price">
              Price
            </option>
            <option value="alphabet">
              Alphabet
            </option>
          </select>
        </span>
      </div>
      <div className="lg:flex lg:space-x-12 lg:justify-between">
        {isLG && <Filters className="flex-shrink-0 hidden lg:block" categories={categories} />}
        <div className="">
          <div className="sm:grid sm:grid-cols-3 sm:gap-12 mb-12">
            {!!products.length && products.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          {!!pages && <Pagination pages={pages} />}
        </div>
      </div>
    </section>
  )
}
