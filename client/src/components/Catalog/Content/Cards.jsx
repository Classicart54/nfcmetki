import styles from '../../../scss/Catalog.module.scss'
import React, {useState} from 'react';
import ProductCard from '../Products/ProductCard';
import {Helmet} from "react-helmet";

const Cards = () => {

    

    let state = {
        productsPage: {
            productsData: [
                {img: "/img/products/card/1.png", name: "Молекула", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Молекула'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/2.png", name: "Вспышка", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Вспышка'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/3.png", name: "Сердце", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Сердце'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/4.png", name: "Галактика", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Галактика'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/5.png", name: "Черный Металл", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Черный Металл'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/6.png", name: "Белый Металл", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Белый Металл'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/7.png", name: "Сияние", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Сияние'. Подскажите, есть ли в наличии?"},
                {img: "/img/products/card/8.png", name: "Снег", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Карта 'Снег'. Подскажите, есть ли в наличии?"},
            ]
        }
    }

    let productsElements = state.productsPage.productsData.map((product) => <ProductCard name={product.name} img={product.img} message={product.message} /> );


    return (

        <div itemscope itemtype="https://schema.org/Product" className={styles.content}>

            <Helmet>
                   
                    <meta name="description"content="Купить электронные визитки со своим дизайном онлайн"/>
            </Helmet>

                <div className={styles.name}>
                    <h1 itemprop="name">Карты</h1>
                </div>

                <div className={styles.products}>
                    {productsElements}

                </div>

        </div>
      
    );
  }
  
  export default Cards;
  