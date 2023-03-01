import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { loginUser, signUpUser } from '../../redux/features/users/usersGetSlice';
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: '',
        password: '',
        imageURL: ''
    })
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    const login = async (user) => {
        await dispatch(loginUser(user));
        navigate("/")
    }

    const signUp = async (user) => {
        await dispatch(signUpUser(user));
        navigate("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        signUp(user)
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
                    <TextField id="outlined-basic" label="Foto de perfil (URL)" type="text" variant="outlined" name='imageURL' value={user.imageURL} onChange={(e) => setUser({ ...user, imageURL: e.target.value })} />
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>Registrarme</Button>
                    <Typography>Ya tienes una cuenta? <Link to='/login'>Iniciá sesión</Link></Typography>
                </form>
            </Grid>
        </Grid>
    )
}
