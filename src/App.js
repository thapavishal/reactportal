import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Allnews from './pages/Allnews';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path = "/" component = { Home } />
      <Route  path = "/About" component = { About } />
      <Route path = "/Allnews" component = { Allnews } />
      <Route path = "/Contact" component = { Contact } />
    </div>
    </BrowserRouter>
  );
}

export default App;
