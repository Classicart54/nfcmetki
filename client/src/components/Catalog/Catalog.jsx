import styles from '../../scss/Catalog.module.scss'
import { Link } from 'react-scroll'
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import Tags from './Content/Tags';
import Cards from './Content/Cards';
import Business from './Content/Business';
import NavbarCatalog from './NavbarCatalog';
import Keys from './Content/Keys';

const Catalog = () => {


    return (

      <div name="products" className={styles.catalog}>


        <div className={styles.headline}>

            <h1 className={styles.title}>Наши продукты</h1>

            <NavbarCatalog/>

        </div>


        <Routes>
            <Route path="/" element={<Tags/>}> </Route>
            <Route path="/cards" element={<Cards/>}> </Route>
            <Route path="/keys" element={<Keys/>}> </Route>
            <Route path="/business" element={<Business/>}> </Route>
        </Routes>



      </div>
      
    );
  }
  
  export default Catalog;
  