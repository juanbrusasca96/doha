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
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(user));
        navigate("/home")
    }
    console.log(user);
    return (
        <Grid container justifyContent="center" alignItems="center" className='login'>
            <Grid item container justifyContent="center" xs={4}>
                <form>
                    <TextField id="outlined-basic" label="Email" type="text" variant="outlined" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>iniciar sesión</Button>
                </form>
            </Grid>
        </Grid>
    )
}
