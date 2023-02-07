import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BasicSelect from '../select/BasicSelect';
import { categories, roundDecimals } from '../../utils/utils.js';
import { Grid } from '@mui/material';

export default function NewProduct({ open, handleClose }) {
    const [product, setProduct] = React.useState({});

    const handleChangeCategory = (category) => {
        setProduct({ ...product, category });
    }

    const handleProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    // React.useEffect(()=>{
    //     setCategory(categories[0]);
    // })
    console.log(product)
    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth={true} >
                <DialogTitle>NUEVO PRODUCTO</DialogTitle>
                <DialogContent>
                    <BasicSelect list={categories} value={product.category} handleChangeValue={(category) => handleChangeCategory(category)} />
                    <TextField autoFocus margin="dense" id="name" name="name" value={product.name} label="Nombre" type="text" fullWidth variant="standard" onChange={(e) => handleProduct(e)} />
                    <Grid container justifyContent="center">
                        <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
                            <TextField autoFocus margin="dense" id="purchasePrice" name="purchasePrice" value={product.purchasePrice} label="Precio de compra" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} />
                            <TextField focused margin="dense" id="recommendedRetailPrice" name="recommendedRetailPrice" value={product.purchasePrice && roundDecimals((product.purchasePrice * 1.3), 2)} label="Precio recomendado" type="number" color='warning' variant="standard" onChange={(e) => handleProduct(e)} InputLabelProps={{ shrink: true, }} sx={{ width: '25%' }} />
                            <TextField autoFocus margin="dense" id="price" name="price" value={product.price} label="Precio de venta" type="number" variant="standard" onChange={(e) => handleProduct(e)} sx={{ width: '25%' }} />
                        </Grid>
                    </Grid>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
