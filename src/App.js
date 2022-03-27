import React from 'react';
// components
import Home from './components/Home';
import DetailedView from './components/DetailedView/DetailedView';
import NotFound from './components/NotFound';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<DetailedView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
