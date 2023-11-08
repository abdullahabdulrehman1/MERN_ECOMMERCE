import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/productlist/components/ProductDetail'

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetail/>
      </Navbar>
    </div>
  )
}

export default ProductDetailPage
