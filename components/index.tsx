import { NextPage } from 'next'
import Head from 'next/head'
import { FeaturedProduct } from 'components/FeaturedProduct';
import { ProductList } from 'components/ProductList';
import { FilterModal } from 'components/FilterModal';
import { Filters } from 'components/Filters'
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from 'utils/context';
import { setQuery } from 'utils/setQuery';
// import TheHeader from './Header'

type HomeProps = {
  featuredProduct: FeaturedProduct;
  products: ProductResponse,
  categories: Categories;
}

const Home: NextPage<HomeProps> = ({
  featuredProduct,
  products: staticProducts,
  categories
}) => {
  const [products, setProducts] = useState(staticProducts.data)
  const [pages, setPages] = useState(staticProducts.pages)
  const { currentPage, filters } = useContext(Context)
  const isFirstRun = useRef(0);
  useEffect(() => {
    if (isFirstRun.current !== 2) {
      isFirstRun.current+=1
      return;
    }
    const query = setQuery(currentPage, filters)
    console.log(query)
    fetch(`${process.env.API_URL}/products${query || ''}`)
    .then(res => res.json())
    .then((res) => {
      setProducts((res as unknown as ProductResponse).data)
    })
  }, [currentPage, filters])

  return (
    <>
      <Head>
        <title>Bejamas - task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TheHeader /> */}
      <main className="pt-[124px] sm:pt-[186px] px-4 xxl:px-24 box-content max-w-[1290px] mx-auto pb-12">
        <FeaturedProduct featuredProduct={featuredProduct} />
        <hr className='border-b-4 border-gray-100 mb-11 sm:mb-16' />
        <ProductList products={products} categories={categories} pages={pages} />
      </main>
      <FilterModal>
        <Filters categories={categories} />
      </FilterModal>
    </>
  )
}

export default Home

export const getStaticProps = async () => {

  const featuredProduct = await fetch(`${process.env.API_URL}/featured-product`)
  const products = await fetch(`${process.env.API_URL}/products`)
  const categories = await fetch(`${process.env.API_URL}/categories`)
  return {
    props: {
      featuredProduct: await featuredProduct.json(),
      products: await products.json(),
      categories: await categories.json()
    }
  }
}