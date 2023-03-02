import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/features/products/productsGetSlice'
import { categories } from '../../utils/utils.js'
// import ProductCard from '../productCard/ProductCard'
import ProductsList from '../productsList/ProductsList'
import BasicSelect from '../select/BasicSelect'

const sortOptions = ['A - Z', 'Precio']

export default function ProductsContainer() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.allProductsWithStockFilterSearch)
    const [sort, setSort] = useState(sortOptions[0]);
    const [options, setOptions] = useState({
        filterColor:'',
        sort:''
    })

    const productsCategories = Array.from(new Set(products.map(prod => prod.category)))

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const handleChangeOptions = (e) => {
        if (e.target.name === 'sort') {
            setSort(e.target.value)
            if (e.target.value === sortOptions[0]) {
                setOptions({ ...options, [e.target.name]: 'name' })
            }
            else {
                setOptions({ ...options, [e.target.name]: 'price' })
            }
        }
        if (e.target.name === 'filterColor') {
            setOptions({ ...options, [e.target.name]: e.target.value })
        }
    }

    useEffect(() => {
        console.log(options);
        dispatch(getAllProducts(options))
    }, [options])

    return (
        <Grid sx={{ padding: '2%' }} className='productContainer'>
            <BasicSelect list={sortOptions} value={sort} handleChangeValue={(e) => handleChangeOptions(e)} className='select' name='sort' />
            {
                categories.map((cat, i) => (productsCategories.includes(cat) && <Grid><h1>{cat}</h1> <ProductsList key={i} products={products} category={cat} /></Grid>))
            }
        </Grid>
    )
}
