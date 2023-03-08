import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Home } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsArray } from '../../redux/features/purchases/purchasesGetSlice';

const columns = ['Nombre', 'Color', 'Tamaño', 'Precio de venta', 'Stock', 'Precio de compra', 'Precio de venta sugerido']

export default function ProductsList({ products, category, className, type }) {
    const dispatch = useDispatch();
    const productsArray = useSelector((state) => state.purchases.productsArray)

    return (
        <TableContainer component={Paper} className={`table ${className}`}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='tableHead'>
                    <TableRow>
                        <TableCell align="center" sx={{ padding: 0 }} className='columnsTitles'>{columns[0]}</TableCell>
                        {
                            columns.slice(1).map((col, i) => <TableCell key={i} align="center" sx={{ width: '9%' }} className='columnsTitles'>{col}</TableCell>)
                        }
                        {type !== Home && <TableCell align="center" className='columnsTitles' sx={{ width: '4%' }}></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (product.category === category || category === true) &&
                        <TableRow
                            key={product.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
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
                            <TableCell align="center" className='rowInfo' sx={{ fontWeight: 'bolder' }}>{product.price}</TableCell>
                            <TableCell align="center" className='rowInfo'>{product.stock}</TableCell>
                            <TableCell align="center" className='rowInfo'>{product.purchasePrice && product.purchasePrice}</TableCell>
                            <TableCell align="center" className='rowInfo'>{product.recommendedRetailPrice && product.recommendedRetailPrice}</TableCell>
                            {type !== Home && <TableCell align="center" className='rowInfo'> <IconButton color="primary" onClick={() => category === true ? dispatch(setProductsArray(products.filter((p) => p !== product))) : dispatch(setProductsArray([...productsArray, product]))}> {category === true ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}</IconButton></TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
