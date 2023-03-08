import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import { newProduct, Purchase } from '../../utils/utils';
import Search from '../search/Search';
import ProductsContainer from '../productsContainer/ProductsContainer';
import { setProductsArray } from '../../redux/features/purchases/purchasesGetSlice';
import { useDispatch, useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewRegister({ open, handleClose, handleClickOpen, type }) {
    const dispatch = useDispatch();
    const total = useSelector((state) => state.purchases.total)

    const handleClosePurchase = () => {
        if (type === Purchase) {
            dispatch(setProductsArray([]))
        }
        handleClose()
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
                                    Nuevo producto
                                </Button>
                                <Search width='60%' />
                            </Grid>
                            <Grid>
                                <Typography display='flex' alignItems='center' sx={{ height: '100%' }}>
                                    Valor de la compra: {total}
                                </Typography>
                            </Grid>

                            <Button autoFocus color="inherit" onClick={handleClose}>
                                Registrar compra
                            </Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <ProductsContainer productsList='allProductsFilterSearch' type={Purchase} />
            </Dialog>
        </div>
    );
}

