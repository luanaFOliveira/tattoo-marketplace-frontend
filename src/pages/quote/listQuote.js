import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import QuoteCard from '../../components/quote-card';
import { Box, Fab, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalQuote from '../../components/modal-quote';


export default function ListQuotes() {

    const [statusFilter, setStatusFilter] = useState('all')

    const quotes = [
        {description:"Nome 1",id:1,tattoo_artist:"Autor",user:"Autor",status:"pending"},
        {description:"Nome 3",id:3,tattoo_artist:"Autor",user:"Autor",status:"approved"},
        {description:"Nome 4",id:4,tattoo_artist:"Autor",user:"Autor",status:"reproved"},
        {description:"Nome 2",id:2,tattoo_artist:"Autor",user:"Autor",status:"approved"},
    ];
    const handleChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap:'1rem',marginBottom:'1rem',justifyContent: 'flex-end' }}>
            <FormControl variant="filled" sx={{ backgroundColor: 'white' }}>
                <InputLabel id="filter" sx={{ backgroundColor: 'white' }}>Filter</InputLabel>
                <Select
                    labelId="filter"
                    id="demo-simple-select"
                    value={statusFilter}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }} 
                    MenuProps={{
                    PaperProps: {
                        sx: {
                        backgroundColor: 'white', 
                        },
                    },
                    }}
                >
                    <MenuItem value={"approved"}>Approved</MenuItem>
                    <MenuItem value={"pending"}>Pending</MenuItem>
                    <MenuItem value={"reproved"}>Reproved</MenuItem>
                    <MenuItem value={"all"}>All</MenuItem>
                </Select>
            </FormControl>
            <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
                <AddIcon />
            </Fab>
            <ModalQuote open={openModal} handleClose={handleCloseModal} />
        </Box>
        <Grid container spacing={3}>
            {quotes.map((quote, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <QuoteCard quote={quote} type="tattoo_artist" />
                </Grid>
            ))}
        </Grid>
    </>);
}
