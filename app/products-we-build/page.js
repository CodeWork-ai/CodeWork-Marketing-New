import React from 'react'
import OurProduct from '../components/ourProduct/ourProduct'
import ProductLanding from '../components/ourProduct/productLanding'
import AnimatedRows from '../components/common/scroll'

const page = () => {
  return (
    <div>
        <ProductLanding/>
        <OurProduct/>
        <AnimatedRows/>
    </div>
  )
}

export default page