import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Avatar, Box } from '@mui/material';
import TattooList from '../../components/image-list';

export default function ViewTattooArtist() {
    const params = useParams();
    const tattooArtistId = params.id;

    //busca tatuador na api

    return (<>
    <Paper 
      elevation={3}
      sx={{ 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '2rem auto',
        backgroundColor: 'white' 
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
        />
        <Typography component="div" variant="h5">
           nome
        </Typography>
        <Typography component="div" variant="h5">
           idade
        </Typography>
        <Typography component="div" variant="h5">
           cidade
        </Typography>
        <Typography component="div" variant="h5">
           categoria
        </Typography>
      </Box>
      <TattooList></TattooList>
    </Paper>
    </>);
}
