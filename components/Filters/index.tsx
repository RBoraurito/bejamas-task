import React, { ChangeEvent, useContext, useState } from 'react'
import { Context } from 'utils/context';

type FiltersProps = {
  className?: string;
  categories: Categories;
}

export const Filters = ({
  className,
  categories: categoriesDict
}: FiltersProps) => {
  const priceFilters = {
    '<;20': 'Lower than $20',
    '>=;20|<=;100': '$20 - $100',
    '>=;100|<=;200': '$100 - $200',
    '>;200': 'More than $200'
  }
  const {filters, setFilters} = useContext(Context)

  const handleFilter = (val: boolean, name: string) => {
    if(val) {
      setFilters({
        ...filters,
        categories: [...(filters.categories as string[]), name]
      })
      return;
    }
    const newFilters =  {
      ...filters,
      categories: filters.categories?.filter(filter => filter !== name)
    }
    setFilters(newFilters)
  }

  const handlePrice = (target: HTMLInputElement, name: string) => {
    if(filters.price === name) {
      (document.querySelectorAll('input[type=checkbox].price-filter') as NodeListOf<HTMLInputElement>).forEach(el => el.checked = false)
      setFilters({
        ...filters,
        price: ''
      })
      return;
    }
    (document.querySelectorAll('input[type=checkbox].price-filter') as NodeListOf<HTMLInputElement>).forEach(el => el.checked = false)
    target.checked = true
    setFilters({
      ...filters,
      price: name
    })
  }

  return (
    <div className={`${className} lg:max-w-[268px] w-full`}>
      <h5 className="text-black font-bold mb-11 text-parragraph-2 hidden lg:inline-block">
        Category
      </h5>
      <style jsx>{`
        .checkmark {
          width: 15px;
          height: 15px;
          left: 4px;
          background-image: url('/img/check.svg');
          background-size: contain;
          background-repeat: no-repeat;
          display: none;
        }

        input[type=checkbox]:checked ~ .checkmark {
          display: block;
        }
      `}</style>
      {categoriesDict.map(cat => (
        <div className="flex items-center mb-10 relative" key={cat.name}>
          <input
            type="checkbox"
            name={cat.name}
            id={cat.name + 'Check'}
            className="flex-shrink-0 w-6 h-6 border-2 border-black rounded-none mr-6 appearance-none"
            onInput={(e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.checked, cat.name)}
          />
          <span className="checkmark absolute top-0 bottom-0 my-auto"></span>
          <label htmlFor={cat.name + 'Check'} className="capitalize text-darker text-parragraph-2">
            {cat.name}
          </label>
        </div>
      ))}
      <hr className="border-b border-gray-150 mb-8" />
      <h5 className="text-black font-bold mb-11 text-parragraph-2">
        Price Range
      </h5>
      {Object.entries(priceFilters).map(price => (
        <div className="flex items-center mb-10 relative" key={price[1]}>
          <input
            type="checkbox"
            name={price[1]} id={price[1] + 'Check'}
            className="flex-shrink-0 w-6 h-6 border-2 border-black rounded-none mr-6 appearance-none price-filter"
            onClick={(e) => handlePrice((e.target as HTMLInputElement), price[0])}
          />
          <span className="checkmark absolute top-0 bottom-0 my-auto"></span>
          <label htmlFor={price[1] + 'Check'} className="capitalize text-darker text-parragraph-2">
            {price[1]}
          </label>
        </div>
      ))}
    </div>
  )
}
