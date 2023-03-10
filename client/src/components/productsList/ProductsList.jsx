import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { handleWheel, home, roundDecimals } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setCopyProductsArray, setProductsArray } from '../../redux/features/purchases/purchasesGetSlice';



export default function ProductsList({ products, category, className, type }) {
    const dispatch = useDispatch();
    const productsArray = useSelector((state) => state.purchases.productsArray)
    const copyProductsArray = useSelector((state) => state.purchases.copyProductsArray)
    const columns = ['Nombre', 'Color', 'Tamaño', 'Precio de venta', category === true ? 'Cantidad comprada' : 'Stock', 'Precio de compra', 'Precio de venta sugerido']

    const handleAdd = (product) => {
        if (category===true) {
            dispatch(setProductsArray(products.filter((p) => p !== product)))
        }
        else {
            dispatch(setProductsArray([...productsArray, product]))
            dispatch(setCopyProductsArray(product))
        }
    }

    const handleChange = (product, e) => {
        let index = productsArray.indexOf(product)
        let newArray = [...productsArray]
        newArray[index] = { ...product, [e.target.name]: parseInt(e.target.value) }
        dispatch(setProductsArray(newArray))
    }

    return (
        <TableContainer component={Paper} className={`table ${className}`}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='tableHead'>
                    <TableRow>
                        <TableCell align="center" sx={{ padding: 0 }} className='columnsTitles'>{columns[0]}</TableCell>
                        {
                            columns.slice(1).map((col, i) => <TableCell key={i} align="center" sx={{ width: '9%' }} className='columnsTitles'>{col}</TableCell>)
                        }
                        {type !== home && <TableCell align="center" className='columnsTitles' sx={{ width: '4%' }}></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (product.category === category || category === true) &&
                        <TableRow
                            key={product.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <Grid container alignItems='center' sx={{ gap: '15px' }}>
                                    <Avatar variant='rounded' src={product.image} sx={{ width: '5.5vw', height: '5.5vw' }} />
                                    <Typography className='rowInfo'>
                                        {product.name}
                                    </Typography>
                                </Grid>
                            </TableCell>
                            <TableCell align="center" className='rowInfo'>{product.color}</TableCell>
                            <TableCell align="center" className='rowInfo'>{product.size && product.size}{product.unitSize}</TableCell>
                            <TableCell align="center" className='rowInfo' sx={{ fontWeight: 'bolder' }}>{category === true ? <TextField type='number' name='price' label={copyProductsArray.find(p=>p._id===product._id).price} onChange={(e) => handleChange(product, e)} onWheel={handleWheel}/> : product.price}</TableCell>
                            <TableCell align="center" className='rowInfo'>{category === true ? <TextField type='number' name='stock' onChange={(e) => handleChange(product, e)} onWheel={handleWheel}/> : product.stock}</TableCell>
                            <TableCell align="center" className='rowInfo'>{category === true ? <TextField type='number' name='purchasePrice' label={copyProductsArray.find(p=>p._id===product._id).purchasePrice} onChange={(e) => handleChange(product, e)} onWheel={handleWheel}/> : product.purchasePrice && product.purchasePrice}</TableCell>
                            <TableCell align="center" className='rowInfo'>{category === true ? <TextField type='number' name='recommendedRetailPrice' value={roundDecimals(product.purchasePrice * 1.3, 2)} onChange={(e) => handleChange(product, e)} onWheel={handleWheel}/> : product.recommendedRetailPrice && product.recommendedRetailPrice}</TableCell>
                            {type !== home && <TableCell align="center" className='rowInfo'> <IconButton color="primary" onClick={()=>handleAdd(product)}> {category === true ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}</IconButton></TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
