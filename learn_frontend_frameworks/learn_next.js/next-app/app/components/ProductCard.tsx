import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

styles.cardContainer

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-lg hover:bg-sky-600'>
        <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard