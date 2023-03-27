import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu.js';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { useDispatch, useSelector } from 'react-redux';
import NewProduct from '../newProduct/NewProduct';
import Search from '../search/Search';
import NewRegister from '../newRegister/NewRegister';
import { endDay, newProduct, newPurchase, pages, purchase, startDay } from '../../utils/utils';
import StartDay from '../startDay/StartDay';
import { Grid } from '@mui/material';
import EndDay from '../endDay/EndDay';
import { getDay } from '../../redux/features/days/daysGetSlice';

export default function NavBar({ logOut }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState({});
    const [openDay, setOpenDay] = React.useState({});
    const user = useSelector((state) => state.users.currentUser);
    const activeDay = useSelector((state) => state.days.day?.active);
    const dispatch = useDispatch();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleClickOpen = (page) => {
        setOpen({ ...open, [page]: true })
    };

    const handleClose = (page) => {
        setOpen({ ...open, [page]: false })
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        let obj = {}
        pages.map((p) => {
            obj = {
                ...obj,
                [p]: false
            }
        })
        setOpen(obj);
        dispatch(getDay());
    }, [])

    return (
        <AppBar position="static" >

            <NewProduct open={open && open[newProduct]} handleClose={() => handleClose(newProduct)} />
            <NewRegister open={open && open[newPurchase]} handleClose={() => handleClose(newPurchase)} handleClickOpen={(value) => handleClickOpen(value)} type={purchase} productsList='allProductsFilterSearch' />
            <StartDay open={openDay && openDay[startDay]} handleClose={() => setOpenDay({ ...openDay, [startDay]: false })} />
            <EndDay open={openDay && openDay[endDay]} handleClose={() => setOpenDay({ ...openDay, [endDay]: false })} />

            <Container maxWidth="//#endregion" className='navbar'>
                <Toolbar disableGutters>
                    <LocalBarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            pr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DOHA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleClickOpen}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleClickOpen(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LocalBarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            pr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DOHA
                    </Typography>

                    <Grid item container justifyContent="space-between">
                        {
                            activeDay ? <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '1%' }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => handleClickOpen(page)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                                <Button variant='contained' color='warning' name={endDay} onClick={(e) => setOpenDay({ ...openDay, [e.target.name]: true })} sx={{ my: 2, color: 'white', display: 'block' }}>Finalizar dia</Button>
                            </Box> : <Button variant='contained' color='warning' name={startDay} onClick={(e) => setOpenDay({ ...openDay, [e.target.name]: true })} sx={{ my: 2, color: 'white', display: 'block' }}>Empezar dia</Button>
                        }
                        <Search width='30%' />
                    </Grid>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={user && user.imageURL} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key={'logOut'} onClick={() => logOut()}>
                                <Typography textAlign="center">Cerrar sesión</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}