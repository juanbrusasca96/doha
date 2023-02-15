import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ list, value, handleChangeValue, name, label, minWidth, borderColor, color }) {
    const style={
        ':before':{
            borderBottom:`2px solid ${borderColor}`
        },
        ':after':{
            borderBottom:`1px solid ${borderColor}`
        }
    }

    return (
        <Box sx={{ minWidth }}>
            <FormControl variant='filled' fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{color: borderColor}} color={color}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={value}
                    label="Age"
                    name={name}
                    onChange={(e) => handleChangeValue(e)}
                    sx={style}
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