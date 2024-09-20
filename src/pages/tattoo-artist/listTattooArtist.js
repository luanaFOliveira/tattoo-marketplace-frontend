import React from 'react';
import TattooArtistCard from '../../components/tattoo-artist-card';
import Grid from '@mui/material/Grid';

export default function ListTattooArtist() {
    const tattooArtists = [
        {name:"Nome 1", city:"Cidade",id:1},
        {name:"Nome 2", city:"Cidade",id:2},
        {name:"Nome 3", city:"Cidade",id:3},
        {name:"Nome 4", city:"Cidade",id:4},
    ];

    return (
        <Grid container spacing={3}>
            {tattooArtists.map((artist, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <TattooArtistCard tattooArtist={artist} />
                </Grid>
            ))}
        </Grid>
    );
}
