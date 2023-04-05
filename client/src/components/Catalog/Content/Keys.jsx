import styles from '../../../scss/Catalog.module.scss'
import { Link } from 'react-scroll'
import ProductMetka from '../Products/ProductMetka';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import ProductKey from '../Products/ProductKey';
import {Helmet} from "react-helmet";


const Keys = () => {

    

    let state = {
        productsPage: {
            productsData: [
                {img: "/img/products/keys/11.png", name: "Лето", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Лето'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/22.png", name: "Полет", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Полет'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/33.png", name: "Север", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Север'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/44.png", name: "Жидкость", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Жидкость'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/55.png", name: "Голубое Небо", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Голубое Небо'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/66.png", name: "Трансформер", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Трансформер'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/77.png", name: "Black", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'Black'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/keys/88.png", name: "White", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовал NFC-Брелок 'White'. Подскажите, есть ли в наличии?"},
            ]
        }
    }

    let productsElements = state.productsPage.productsData.map((product) => <ProductKey name={product.name} img={product.img} message={product.message} /> );


    return (

        <div itemscope itemtype="https://schema.org/Product" className={styles.content}>

            <Helmet>
                    
                    <meta name="description"content="Купить NFC-Брелоки со своим дизайном онлайн"/>
            </Helmet>

                <div className={styles.name}>
                    <h1 itemprop="name">Брелоки</h1>
                </div>

                <div className={styles.products}>
                    {productsElements}

                </div>

        </div>
      
    );
  }
  
  export default Keys;
  