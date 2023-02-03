import { Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
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
    }, [])

    return (
        <Grid>
            Home
        </Grid>
    )
}
