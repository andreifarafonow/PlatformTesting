import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <Router>
      <Header profileName="Андрей" />
      <Content />
      <Menu />
    </Router>

  );
}

export default App;