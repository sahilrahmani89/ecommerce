import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Error from './components/Error'
import ProductDetails from './components/ProductDetails'
import Pay from './components/Pay'
import Contact from './components/Contact';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route exact path ='/cart'>
            <Cart/>
          </Route>
          <Route exact path ='/product/:id'>
              <ProductDetails/>
          </Route>
          <Route exact path='/pay'>
            <Pay/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/about'>
             <About/>
          </Route>
          <Route exact path ='/shop'>
            <Shop/>
          </Route>
          <Route path='*'>
             <Error/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
