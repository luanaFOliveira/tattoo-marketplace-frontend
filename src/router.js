import { createBrowserRouter } from "react-router-dom";
import ListTattooArtist from './pages/tattoo-artist/listTattooArtist'; 
import ListCategories from './pages/categories/listCategories'; 
import ViewCategory from './pages/categories/viewCategory';
import ViewTattooArtist from './pages/tattoo-artist/viewTattooArtist';
import AddTattooArtist from './pages/tattoo-artist/addTattooArtist';
import ListQuotes from './pages/quote/listQuote';
const router = createBrowserRouter([
    {
        path:"/tattoo-artists",
        element:<ListTattooArtist/>
    },
    {
        path:"/tattoo-artists/:id",
        element:<ViewTattooArtist/>
    },
    {
        path:"/tattoo-artists/new",
        element:<AddTattooArtist/>
    },
    {
        path:"/categories",
        element:<ListCategories/>
    },
    {
        path:"/categories/:id",
        element:<ViewCategory/>
    },
    {
        path:"/quotes",
        element:<ListQuotes/>
    },
]);

export default router;

