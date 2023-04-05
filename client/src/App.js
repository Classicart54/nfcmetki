import React, { Component }  from 'react';
import styles from './App.module.scss';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Individual from './components/individuality/Individuality';
import Interface from './components/Interface/Interface';
import Partners from './components/Partners/Partners';
import Photos from './components/Photos/Photos';
import Queshtions from './components/Queshtions/Queshtions';
import Work from './components/Work/Work';

import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div className={styles.wrapper}>

      <Header/>
      <About/>
      <Work/>
      <Benefits/>
      <BrowserRouter>
        <Catalog/>
      </BrowserRouter>
      <Individual/>
      <Interface/>
      <Photos/>
      <Feedbacks/>
      <Partners/>
      <Queshtions/>
      <Contacts/>
      <Footer/>


    </div>
  );
}

export default App;
