import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, IconButton, TextField, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { handleWheel, roundDecimals } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setIdProducts, setProductsPromoArray } from '../../redux/features/promos/promosGetSlice';



export default function ProductsListPromo({ products, className }) {
    const dispatch = useDispatch();
    const productsArray = useSelector((state) => state.promos.productsArray)
    const copyProductsArray = useSelector((state) => state.promos.copyProductsArray)
    const columns = ['Nombre', 'Color', 'Tamaño', 'Precio de venta', 'Cantidad comprada', 'Precio de compra', 'Precio de venta sugerido']

    const handleRemove = (product) => {
        dispatch(setProductsPromoArray(products.filter((p) => p !== product)))
    }

    const handleChange = (product, e) => {
        let index = productsArray.indexOf(product)
        let newArray = [...productsArray]
        if (e.target.name === 'purchasePrice') {
            newArray[index] = { ...product, [e.target.name]: parseFloat(e.target.value), recommendedRetailPrice: roundDecimals(parseFloat(e.target.value) * 1.3, 2) }
        }
        else {
            if (e.target.value === '' && e.target.name === 'stock') {
                newArray[index] = { ...product, [e.target.name]: parseFloat(0) }
            }
            else {
                newArray[index] = { ...product, [e.target.name]: parseFloat(e.target.value) }
            }
        }
        dispatch(setProductsPromoArray(newArray))
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
                        <TableCell align="center" className='columnsTitles' sx={{ width: '4%' }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) =>
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
                            {/* <TableCell align="center" className='rowInfo'>{product.color}</TableCell>
                            <TableCell align="center" className='rowInfo'>{product.size && product.size}{product.unitSize}</TableCell>
                            <TableCell align="center" className='rowInfo' sx={{ fontWeight: 'bolder' }}><TextField type='number' name='price' label={copyProductsArray.find(p => p._id === product._id).price} onChange={(e) => handleChange(product, e)} onWheel={handleWheel} /></TableCell>
                            <TableCell align="center" className='rowInfo'><TextField type='number' name='stock' onChange={(e) => handleChange(product, e)} onWheel={handleWheel} /></TableCell>
                            <TableCell align="center" className='rowInfo'><TextField type='number' name='purchasePrice' label={copyProductsArray.find(p => p._id === product._id).purchasePrice} onChange={(e) => handleChange(product, e)} onWheel={handleWheel} /></TableCell>
                            <TableCell align="center" className='rowInfo'><TextField type='number' name='recommendedRetailPrice' value={roundDecimals(product.purchasePrice * 1.3, 2)} onWheel={handleWheel} /></TableCell>
                            <TableCell align="center" className='rowInfo'> <IconButton color="primary" onClick={() => handleRemove(product)}><RemoveCircleOutlineIcon /></IconButton></TableCell> */}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
