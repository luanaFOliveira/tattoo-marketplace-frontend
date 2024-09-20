import React, { useState } from 'react';
import { TextField, Button, Box, Modal, InputLabel } from '@mui/material';

export default function ModalQuote({ open, handleClose }) {
    const [formData, setFormData] = useState({
        description: '',
        size: '',
        placement: '',
        color: '',
        price: 0,
        status: 'pending',
        tattoo_artist: null,
    });
    //colocar o user como o usuario atual
    //tattoo artist manda o id

    const [inspiration, setInspiration] = useState('');
    //pega os tatuadores
    const handleSubmit = (event) => {
        event.preventDefault();
        // cria o orcamento
    };
    const handleImageChange = (event) => {
        setInspiration(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, 
            [name]: value
        });
    };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex', 
          flexDirection: 'column', 
          gap:'1rem'
      }}>
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                variant='outlined'
                label='Description'
                name='description'
                multiline
                value={formData.description}
                onChange={handleInputChange}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap:'1rem' }}>
                <TextField
                    variant='outlined'
                    label='Size'
                    name='size'
                    value={formData.size}
                    onChange={handleInputChange}
                />
                <TextField
                    variant='outlined'
                    label='Placement'
                    name='placement'
                    value={formData.placement}
                    onChange={handleInputChange}
                />
                <TextField
                    variant='outlined'
                    label='Color'
                    name='color'
                    value={formData.color}
                    onChange={handleInputChange}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel id="images">Upload a inspiration image</InputLabel>
                <TextField
                    fullWidth
                    type="file"
                    name='inspiration'
                    id="inspiration"
                    onChange={handleImageChange}
                />
            </Box>
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
            >
                Request Quote
            </Button>
        </form>
      </Box>
    </Modal>
  );
}
