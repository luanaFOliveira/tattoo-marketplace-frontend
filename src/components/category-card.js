import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function CategoryCard({category}) {
  return (
    <Card 
    component={Link}
    to={`/categories/${category.id}`}
    sx={{ maxWidth: 345, textDecoration: 'none', color: 'inherit' }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
