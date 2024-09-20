import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function SearchBar({options}) {
  return (
    <Paper sx={{ width: 300 }}>
        <Autocomplete
        freeSolo
        id="search-bar"
        disableClearable
        options={options.map((option) => option.name)}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search"
            slotProps={{
                input: {
                ...params.InputProps,
                type: 'search',
                },
            }}
            />
        )}
        />
    </Paper>
  );
}
