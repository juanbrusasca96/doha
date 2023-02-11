import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/features/products/productsGetSlice'
import { categories } from '../../utils/utils.js'
import ProductCard from '../productCard/ProductCard'
import ProductsList from '../productsList/ProductsList'

export default function ProductsContainer() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.allProductsWithStockFilterSearch)

    const productsCategories = Array.from(new Set(products.map(prod=>prod.category)))

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    console.log(products);

    return (
        <Grid sx={{ padding: '2%' }}>
            {
                categories.map((cat, i) => (productsCategories.includes(cat) && <Grid><h1>{cat}</h1> <ProductsList key={i} products={products} category={cat} /></Grid>))
            }
        </Grid>
    )
}
