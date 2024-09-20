import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';

export default function PasswordInput({password,handlePasswordChange}) {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        handlePasswordChange(event.target.value);  
    };

    return(<>
    <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label="Password"
        />
    </FormControl>
    </>);


}

