import { Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/features/users/usersGetSlice';

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))

    const checkLogin = async () => {
        const response = await axios.post('/api/session/login', user)
        if (!response.data.payload.user) logOut()
    }

    const logOut = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    useEffect(() => {
        checkLogin();
        dispatch(setUser(user));
    }, [])

    return (
        <Grid>
            Home
        </Grid>
    )
}
