import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BasicSelect from '../select/BasicSelect';
import { categories, colors, Promo, roundDecimals, unitSizes } from '../../utils/utils.js';
import { Avatar, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createProduct, getAllProducts } from '../../redux/features/products/productsGetSlice';
import Swal from 'sweetalert2'

export default function NewProduct({ open, handleClose }) {
    const [product, setProduct] = React.useState({});
    const dispatch = useDispatch();

    const handleProduct = (e, key, value) => {
        if (!!key && !!value) {
            setProduct({ ...product, [key]: value, [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value })
        }
        else {
            setProduct({ ...product, [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value })
        }
    }

    const handleSubmit = () => {
        dispatch(createProduct(product))
        setProduct({})
        handleClose()
        Swal.fire({
            icon: 'success',
            title: 'Producto creado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        // dispatch(getAllProducts())
        // setTimeout(() => {
        //     window.location.reload(true)
        // }, 1500)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth={true} scroll='body'>
                <DialogTitle>NUEVO PRODUCTO</DialogTitle>
                <DialogContent >
                    <Grid container sx={{ gap: '30px' }}>
                        <BasicSelect list={categories.filter((c) => c !== Promo)} value={product.category} handleChangeValue={(e) => handleProduct(e)} name='category' label='Categoria' minWidth='100%' borderColor='green' color='success' />
                        <TextField focused margin="dense" id="name" name="name" value={product.name} label="Nombre" type="text" fullWidth variant="standard" onChange={(e) => handleProduct(e)} color='success' />
                        <Grid container justifyContent="space-between">
                            <Grid container sx={{ width: '55%' }}>
                                <TextField focused margin="dense" id="image" name="image" value={product.image} label="URL imagen" type="text" fullWidth variant="standard" onChange={(e) => handleProduct(e)} />
                            </Grid>
                            <Grid container justifyContent='center' alignItems='center' sx={{ width: '40%' }}>
                                <Avatar variant='rounded' src={product.image && product.image} sx={{ width: '6.589vw', height: '6.589vw' }} />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
                                <TextField focused margin="dense" id="purchasePrice" name="purchasePrice" value={product.purchasePrice} label="Precio de compra" type="number" variant="standard" onChange={(e) => handleProduct(e, 'recommendedRetailPrice', roundDecimals(e.target.value * 1.3, 2))} sx={{ width: '25%' }} />
                                <TextField focused margin="dense" id="recommendedRetailPrice" value={product.purchasePrice && roundDecimals((product.purchasePrice * 1.3), 2)} label="Precio recomendado" type="number" variant="standard" InputLabelProps={{ shrink: true, }} sx={{ width: '25%' }} />
                                <TextField focused margin="dense" id="price" name="price" value={product.price} label="Precio de venta" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} color='success' />
                            </Grid>
                        </Grid>
                        <Grid container sx={{ gap: '12.5%' }}>
                            <TextField focused margin="dense" id="size" name="size" value={product.size} label="Tamaño" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} />
                            <BasicSelect list={unitSizes.slice(1)} value={product.unitSize} handleChangeValue={(e) => handleProduct(e)} name='unitSize' label='Unidad de tamaño' minWidth='35%' borderColor='rgb(25, 118, 210)' color='primary'/>
                        </Grid>
                        <Grid container sx={{ gap: '12.5%' }}>
                            <TextField focused margin="dense" id="stock" name="stock" value={product.stock} label="Stock" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} />
                            <TextField focused margin="dense" id="limitStock" name="limitStock" value={product.limitStock} label="Limite de stock" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} />
                            <BasicSelect list={colors.slice(1)} value={product.color} handleChangeValue={(e) => handleProduct(e)} name='color' label='Color' minWidth='25%' borderColor='rgb(25, 118, 210)' color='primary'/>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancelar</Button>
                                <Button onClick={handleSubmit}>Crear producto</Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}
