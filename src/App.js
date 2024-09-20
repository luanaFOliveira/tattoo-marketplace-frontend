import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import ListTattooArtist from './pages/tattoo-artist/listTattooArtist'; 
import ListCategories from './pages/categories/listCategories'; 
import ViewCategory from './pages/categories/viewCategory';
import ViewTattooArtist from './pages/tattoo-artist/viewTattooArtist';
import AddTattooArtist from './pages/tattoo-artist/addTattooArtist';
import ListQuotes from './pages/quote/listQuote';

function App() {
  const items = [
    { text: 'Tattoo Artist', path: '/tattoo-artists' },
    { text: 'Categories', path: '/categories' },
    { text: 'Quotes', path: '/quotes' }
  ];

  return (
    <Router>
      <NavBar items={items}>
        <Routes>
          <Route path="/tattoo-artists" element={<ListTattooArtist />} />
          <Route path="/tattoo-artists/:id" element={<ViewTattooArtist />} />
          <Route path="/tattoo-artists/new" element={<AddTattooArtist />} />
          <Route path="/categories" element={<ListCategories />} />
          <Route path="/categories/:id" element={<ViewCategory />} />
          <Route path="/quotes" element={<ListQuotes />} />

        </Routes>
      </NavBar>
    </Router>
  );
}

export default App;
