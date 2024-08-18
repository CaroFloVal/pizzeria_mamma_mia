import React from 'react';
import NavbarPizza from './components/Navbar';
import Cart from './components/Cart'
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';


function App() {
  return (
    <div>
      <NavbarPizza />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage/> */}
      <Cart/>
      <Footer />
    </div>
  );
}

export default App;