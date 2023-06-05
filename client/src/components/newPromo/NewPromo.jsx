import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import { newProduct, promo, updateStock } from '../../utils/utils';
import Search from '../search/Search';
import ProductsContainer from '../productsContainer/ProductsContainer';
import { clear, sendPurchase, setProductsArray } from '../../redux/features/purchases/purchasesGetSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearProducts, getAllProducts, updateStockInDB } from '../../redux/features/products/productsGetSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewPromo({ open, handleClose, handleClickOpen, type, productsList }) {
    const dispatch = useDispatch();
    const productsArray = useSelector((state) => state.purchases.productsArray)
    const products = useSelector((state) => state.products[productsList])
    const [product, setProduct] = React.useState({});

    const handleClosePurchase = () => {
        handleClose()
    }

    const handleClick = () => {
        let stockUpdated = updateStock(products, productsArray)
        dispatch(updateStockInDB(stockUpdated, products))
        dispatch(clear())
        handleClose()
    }

    const handleChange=(e)=>{

    }

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClosePurchase}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Grid container justifyContent='space-between'>
                            <Grid container sx={{ width: '60%' }}>
                                <Button autoFocus color="inherit" onClick={() => handleClickOpen(newProduct)}>
                                    Nuevo Producto
                                </Button>
                                <Search width='60%' />
                            </Grid>
                            <Grid>
                                <Typography display='flex' alignItems='center' sx={{ height: '100%' }}>
                                    {/* Valor de la compra: {total} */}
                                </Typography>
                            </Grid>
                            <Button autoFocus color="inherit" onClick={handleClick}>
                                Registrar promo
                            </Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <ProductsContainer productsList={productsList} type={promo} />
            </Dialog>
        </div>
    );
}