import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

// images import 
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
// import Img6 from '../../assets/product/p-6.jpg'
import Img7 from '../../assets/product/p-7.jpg'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img7,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img7,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img7,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <Heading title="Our Products" subtitle="Explore Our Products"/>
            {/* Body section */}
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData} />
        </div>
    </div>
  )
}

export default Products