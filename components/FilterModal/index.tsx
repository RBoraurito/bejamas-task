import React, { ReactNode, useContext } from 'react'
import { Context } from 'utils/context'
import { Close } from 'components/icons/close'

type FilterModalProps = {
  children: ReactNode
}

export const FilterModal = ({
  children
}: FilterModalProps) => {
  const context = useContext(Context);
  
  return (
    <>
      <style jsx>{`
        section.active {
          transform: none
        }
      `}</style>
      <section className={`max-h-[90vh] z-10 w-screen bg-white fixed bottom-0 lg:hidden px-9 pt-20 pb-32 overflow-scroll transition-transform duration-300 translate-y-[90vh] ${context.showFilters && 'active'}`}>
        <div className="flex justify-between items-center mb-8 py-5 px-9 fixed top-[10vh] left-0 right-0 bg-white z-10">
          <h5 className="text-black text-display font-bold">
            Filter
          </h5>
          <button onClick={() => context.setShowFilters(false)}>
            <Close />
          </button>
        </div>
        {children}
        <div className="px-4 py-6 flex space-x-5 fixed bottom-0 left-0 right-0 border-t-4 border-gray-400 bg-white">
          <button className="py-3 px-12 uppercase font-medium bg-white text-black text-lead border-[3px] border-black">
            clear
          </button>
          <button className="py-3 px-12 uppercase font-medium bg-black text-white text-lead">
            save
          </button>
        </div>
      </section>
    </>
  )
}
