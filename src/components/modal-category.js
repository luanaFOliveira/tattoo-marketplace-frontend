import * as React from 'react';
import { TextField, Button, Box, Modal } from '@mui/material';

export default function ModalCategory({ open, handleClose }) {
  const [name, setName] = React.useState('');
  const [img, setImg] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adiciona categoria
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
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
      }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant='outlined'
            label='Name'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            fullWidth
            type='file'
            id='img'
            onChange={(event) => setImg(event.target.files[0])} 
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            Add Category
          </Button>
        </form>
      </Box>
    </Modal>
  );
}