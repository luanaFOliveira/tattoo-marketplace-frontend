import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TattooArtistCard from '../../components/tattoo-artist-card';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function ViewCategory() {
    const params = useParams();
    const categoryId = params.id;

    //const [tattooArtistList, setTattooArtistList] = useState([]);
    //busca os tatuadores

    const tattooArtists = [
        {name:"Nome 1", city:"Cidade",id:1},
        {name:"Nome 2", city:"Cidade",id:2},
        {name:"Nome 3", city:"Cidade",id:3},
        {name:"Nome 4", city:"Cidade",id:4},
    ];

    return(<>
        <Typography sx={{ display:'flex', justifyContent:'center'}}  variant="h4">{categoryId}</Typography>
        <Grid container spacing={3}>
            {tattooArtists.map((artist, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <TattooArtistCard tattooArtist={artist} />
                </Grid>
            ))}
        </Grid>
    </>);
}
