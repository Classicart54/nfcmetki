import styles from '../../../scss/Catalog.module.scss'
import { Link } from 'react-scroll'
import ProductMetka from '../Products/ProductMetka';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import { Helmet } from 'react-helmet';



const Tags = () => {

    

    let state = {
        productsPage: {
            productsData: [
                {img: "/img/products/1.png", name: "Галактика", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Галактика'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/2.png", name: "Матрица", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Матрица'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/3.png", name: "Металлик", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Металлик'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/4.png", name: "Морской Бриз", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Морской Бриз'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/5.png", name: "White", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'White'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/6.png", name: "Black", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Black'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/7.png", name: "Фантазия", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Фантазия'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/8.png", name: "Арктика", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Арктика'. Подскажите, есть ли в наличии?"},
            ]
        }
    }

    let productsElements = state.productsPage.productsData.map((product) => <ProductMetka name={product.name} img={product.img} message={product.message} /> );


    return (

        <div itemscope itemtype="https://schema.org/Product" className={styles.content}>

            <Helmet>
                    
                    <meta name="description"content="Купить электронные визитки со своим дизайном онлайн"/>
            </Helmet>

                <div className={styles.name}>
                    <h1 itemprop="name">Метки</h1>
                </div>

                <div className={styles.products}>
                    {productsElements}

                </div>

        </div>
      
    );
  }
  
  export default Tags;
  