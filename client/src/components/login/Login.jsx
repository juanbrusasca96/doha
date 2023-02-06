import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../redux/features/users/usersGetSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: '',
        password: ''
    })
    const userLocalStorage = localStorage.getItem('user');

    const login = async (user) => {
        await dispatch(loginUser(user));
        navigate("/home")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(user)
    }

    useEffect(() => {
        if (userLocalStorage) {
            let user = { userName: userLocalStorage.userName, password: userLocalStorage.password }
            login(user);
        }
    }, [])

    return (
        <Grid container justifyContent="center" alignItems="center" className='login'>
            <Grid item container justifyContent="center" xs={4}>
                <form>
                    <TextField id="outlined-basic" label="Nombre de usuario" type="text" variant="outlined" name='userName' value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                    <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>iniciar sesión</Button>
                    <Typography>Todavia no tienes una cuenta? <Link to='/signup'>Registrate</Link></Typography>
                </form>
            </Grid>
        </Grid>
    )
}
