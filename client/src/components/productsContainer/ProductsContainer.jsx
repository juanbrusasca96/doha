import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/features/products/productsGetSlice'
import { categories, colors, purchase, sortOptions } from '../../utils/utils.js'
import ProductsList from '../productsList/ProductsList'
import ProductsListPurchase from '../productsListPurchase/ProductsListPurchase'
import BasicSelect from '../select/BasicSelect'
import ProductsListPromo from '../productsListPromo/ProductsListPromo'

const colorsOptions = ['Todos', ...colors.slice(1)];

export default function ProductsContainer({ productsList, type, date, setDate }) {
    const dispatch = useDispatch();
    const productsPurchaseArray = useSelector((state) => state.purchases.productsArray)
    const productsPromoArray = useSelector((state) => state.promos.productsArray)
    const products = useSelector((state) => state.products[productsList]).filter((product) => !productsPurchaseArray.find(prod => prod._id === product._id) && !productsPromoArray.find(prod => prod._id === product._id));
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
        <Grid sx={{ padding: '1%' }} className='productContainer'>
            <Grid container sx={{ gap: '2%', marginBottom:'2%' }}>
                <BasicSelect list={sortOptions} value={sort} handleChangeValue={(e) => handleChangeOptions(e)} className='select' name='sort' label='Ordenar por' />
                <BasicSelect list={colorsOptions} value={color} handleChangeValue={(e) => handleChangeOptions(e)} className='select' name='color' label='Filtrar por color' />
                {type === purchase ? <Calendar onChange={setDate} value={date} /> : ''}
            </Grid>
            {
                productsPurchaseArray.length > 0 && <ProductsListPurchase products={productsPurchaseArray} className='added' />
            }
            {
                productsPromoArray.length > 0 && <ProductsListPromo products={productsPromoArray} />
            }
            {
                categories.map((cat, i) => (productsCategories.includes(cat) && <Grid><h1>{cat}</h1> <ProductsList key={i} products={products} category={cat} type={type} /></Grid>))
            }
        </Grid>
    )
}
