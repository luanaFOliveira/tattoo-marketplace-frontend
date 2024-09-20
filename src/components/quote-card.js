import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function QuoteCard({ quote, type }) {
  const author = type === 'tattoo_artist' ? quote.tattoo_artist : quote.user;

  const statusStyles = {
    approved: { color: 'green' },
    reproved: { color: 'red' },
    pending: { color: 'orange' },
  };

  return (
    <Card 
      // component={Link}
      // to={`/tattoo-artists/${tattooArtist.id}`}
      sx={{ display: 'flex' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {quote.description}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
          >
            {author}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={statusStyles[quote.status]} 
          >
            {quote.status}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 'auto' }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
