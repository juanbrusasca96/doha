import { alpha, Box, Grid, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsFilterSearch } from '../../redux/features/products/productsGetSlice';

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3)
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Search({width}) {
    const [search, setSearch] = React.useState();
    const products = useSelector((state) => state.products.allProducts);
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());

    }

    React.useEffect(() => {
        dispatch(productsFilterSearch(search));
    }, [search, products])

    return (
        <Grid container alignItems='center' sx={{ width }}>
            <SearchBar>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Buscar…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => handleSearchChange(e)} />
            </SearchBar>
        </Grid>
    )
}
