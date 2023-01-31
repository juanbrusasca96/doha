import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../redux/features/users/usersGetSlice';
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(loginUser(user));
    }
    console.log(user);
    return (
        <Grid container justifyContent="center" alignItems="center" className='login'>
            <Grid item container justifyContent="center" xs={4}>
                <form>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <TextField id="outlined-basic" label="Contraseña" variant="outlined" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>iniciar sesión</Button>
                </form>
            </Grid>
        </Grid>
    )
}
