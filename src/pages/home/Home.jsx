import React from 'react'
import CategorySearch from '../../component/categorysearch/Category'
import Hero from '../../component/hero/Hero'
import Product from '../../component/product/Product'
import MoreProduct from '../../component/categorysearch/more/MoreProduct'
import OurPartners from '../../component/ourpartner/OurPartner'

function Home() {
  return (
   <>
   <CategorySearch/>
   <Hero/>
   <Product/>
   <MoreProduct/>
   {/* <OurPartners/> */}
   </>
  )
}

export default Home

