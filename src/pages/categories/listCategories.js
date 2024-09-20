import React from 'react';
import CategoryCard from '../../components/category-card';
import Grid from '@mui/material/Grid';
import { Box, Fab } from '@mui/material';
import SearchBar from '../../components/search-bar';
import ModalCategory from '../../components/modal-category';
import AddIcon from '@mui/icons-material/Add';

export default function ListCategories() {
    const categories = [
        {name:"Nome 1",id:1},
        {name:"Nome 2",id:2},
        {name:"Nome 3",id:3},
        {name:"Nome 4",id:4},
    ];
    const options = categories;
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
        {/* <Box sx={{ padding: '2rem', display: 'flex', alignItems: 'center', color:'white' }}>
            <Typography sx={{ marginRight: '1rem' }}  variant="h5">Categories</Typography>
            <SearchBar options={options} />
        </Box> */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap:'1rem',marginBottom:'1rem',justifyContent: 'flex-end' }}>
            <Fab color="primary" aria-label="add" onClick={handleOpenModal}>
                <AddIcon />
            </Fab>
            <ModalCategory open={openModal} handleClose={handleCloseModal} />
        </Box>
        <Grid container spacing={3}>
            {categories.map((category, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CategoryCard category={category} />
                </Grid>
            ))}
        </Grid>
        </>);
}
