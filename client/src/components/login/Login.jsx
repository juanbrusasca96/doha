import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../redux/features/users/usersGetSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(user));
        navigate("/home")
    }

    return (
        <Grid container justifyContent="center" alignItems="center" className='login'>
            <Grid item container justifyContent="center" xs={4}>
                <form>
                    <TextField id="outlined-basic" label="Nombre de usuario" type="text" variant="outlined" name='userName' value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                    <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <Button variant="contained" onClick={(e)=>handleSubmit(e)}>iniciar sesión</Button>
                </form>
            </Grid>
        </Grid>
    )
}
