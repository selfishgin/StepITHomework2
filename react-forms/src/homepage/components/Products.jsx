// products.jsx
import SearchBar from './SearchBar'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { themeStore } from '../../common/Store'

const Products = () => {
    const {theme, toggle} = useStore(themeStore)
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [pageSize, setPageSize] = useState(10)

    const getProductData = async () => {
        try {
            const baseUrl = `http://localhost:3000/api/products?pageSize=${pageSize}`
            const url = searchTerm ? baseUrl + `&searchTerm=${searchTerm}` : baseUrl
            const response = await fetch(url)
            const data = await response.json() 


            setProducts(data.products)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProductData()
    }, [searchTerm, pageSize])

  return (
    <div className={`w-full h-full ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <div className='grid grid-cols-3 gap-10 p-10'>
        {products.map(product => <ProductCard product={product}/>)}
        <button onClick={() => {
            setPageSize(prevState => prevState + 5)
        }} className='text-white bg-red-500 px-5 py-3 w-fit col-span-3 justify-self-center'>View more</button>
    </div>
    </div>
  )
}

export default Products