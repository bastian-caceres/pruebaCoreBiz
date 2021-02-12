import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './componentes/NavBar';
import Slider from './componentes/Slider';
import Body from './componentes/Body';
import Footer from './componentes/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
      <Slider/>
      <Body/>
      <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

