import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function TattooArtistCard({ tattooArtist }) {
  return (
    <Card 
    component={Link}
    to={`/tattoo-artists/${tattooArtist.id}`}
    sx={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {tattooArtist.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {tattooArtist.city}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
