import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ list, value, handleChangeValue }) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant='filled' fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={value}
                    label="Age"
                    onChange={(e) => handleChangeValue(e.target.value)}
                >
                    {
                        list.map((elem) => (
                            <MenuItem key={elem} value={elem}>{elem}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}