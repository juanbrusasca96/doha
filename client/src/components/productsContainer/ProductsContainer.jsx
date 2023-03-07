import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/features/products/productsGetSlice'
import { categories, colors, sortOptions } from '../../utils/utils.js'
// import ProductCard from '../productCard/ProductCard'
import ProductsList from '../productsList/ProductsList'
import BasicSelect from '../select/BasicSelect'

const colorsOptions = ['Todos', ...colors.slice(1)];

export default function ProductsContainer({ productsList, home }) {
    const dispatch = useDispatch();
    const [productsArray, setProductsArray] = React.useState([])
    const products = useSelector((state) => state.products[productsList]).filter((product) => !productsArray.includes(product));
    const [sort, setSort] = useState(sortOptions[0]);
    const [color, setColor] = useState(colorsOptions[0]);
    const [options, setOptions] = useState({
        color: '',
        sort: ''
    });

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
        if (e.target.name === 'color') {
            setColor(e.target.value)
            if (e.target.value === colorsOptions[0]) {
                setOptions({ ...options, [e.target.name]: '' })
            }
            else {
                setOptions({ ...options, [e.target.name]: e.target.value })
            }

        }
    }

    useEffect(() => {
        dispatch(getAllProducts(options))
    }, [options])

    return (
        <Grid sx={{ padding: '2%' }} className='productContainer'>
            <Grid container sx={{ gap: '2%' }}>
                <BasicSelect list={sortOptions} value={sort} handleChangeValue={(e) => handleChangeOptions(e)} className='select' name='sort' label='Ordenar por' />
                <BasicSelect list={colorsOptions} value={color} handleChangeValue={(e) => handleChangeOptions(e)} className='select' name='color' label='Filtrar por color' />
            </Grid>
            {
                productsArray.length > 0 && <ProductsList products={productsArray} productsArray={[]} setProductsArray={setProductsArray} category={true} className='added' home={home} />
            }
            {
                categories.map((cat, i) => (productsCategories.includes(cat) && <Grid><h1>{cat}</h1> <ProductsList key={i} products={products} category={cat} setProductsArray={setProductsArray} productsArray={productsArray} home={home} /></Grid>))
            }
        </Grid>
    )
}
