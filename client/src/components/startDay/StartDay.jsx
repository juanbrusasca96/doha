import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { handleWheel } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setDay } from '../../redux/features/days/daysGetSlice';

export default function StartDay({ open, handleClose }) {
    const [value, setValue] = React.useState();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDay({ date: new Date(), initialAmount: value }))
        handleClose()
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Empezar dia</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Efectivo al iniciar el dia"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={value}
                        onChange={(e) => setValue(parseInt(e.target.value))}
                        onWheel={handleWheel}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClick}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

