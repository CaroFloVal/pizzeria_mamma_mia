import React from 'react';
import NavbarPizza from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavbarPizza />
      <Home />
      <Footer />
    </div>
  );
}

export default App;