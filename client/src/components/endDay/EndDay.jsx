import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { endDay, getDay } from '../../redux/features/days/daysGetSlice';

export default function EndDay({ open, handleClose }) {
  const dispatch = useDispatch();
  const day = useSelector((state) => state.days.day)

  const handleClick = () => {
    dispatch(endDay(day._id, { ...day, active: false }))
    handleClose()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>¿Seguro desea finalizar el dia?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClick}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
