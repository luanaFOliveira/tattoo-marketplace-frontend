import { Paper, TextField, Button, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import PasswordInput from '../../components/password-input';

export default function AddTattooArtist() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
        category: '',
        email: '',
        password: '',
    });

    const [images, setImages] = useState([]);
    const [profilePic, setProfilePic] = useState(null); 

    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files); 
        setImages(selectedFiles);
    };

    const handleProfilePicChange = (event) => {
        setProfilePic(event.target.files[0]);
    };

    const handlePasswordChange = (newPassword) => {
        setFormData((prevData) => ({
            ...prevData,
            password: newPassword,
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData, profilePic, images);
    };

    return (
        <Paper 
            elevation={3}
            sx={{ 
                padding: '2rem', 
                maxWidth: '800px', 
                margin: '2rem auto', 
                backgroundColor: 'white' 
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    
                    {/* Duas colunas: uma para campos de senha, e outra para idade/cidade/categoria */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        
                        {/* Primeira Coluna */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='Name'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='Email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <PasswordInput
                                password={formData.password} 
                                onPasswordChange={handlePasswordChange} 
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='Age'
                                name='age'
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                            <TextField
                                fullWidth
                                variant='outlined'
                                label='City'
                                name='city'
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    name='category'
                                    value={formData.category}
                                    label="Category"
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="Tattoo Artist">Tattoo Artist</MenuItem>
                                    <MenuItem value="Apprentice">Apprentice</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', flex: 1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <InputLabel id="images">Upload profile picture</InputLabel>
                            <TextField
                                fullWidth
                                type="file"
                                name='profile_img'
                                id="profile-pic"
                                onChange={handleProfilePicChange}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <InputLabel id="images">Upload tattoo examples for portifolio</InputLabel>
                            <TextField
                                fullWidth
                                type="file"
                                id="img"
                                inputProps={{ multiple: true }}
                                onChange={handleImageChange}
                            />
                        </Box>
                    </Box>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        fullWidth
                    >
                        Add Tattoo Artist
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}
