import styles from './Business.module.scss'
import React, {useState} from 'react';
import { Routes, Route, Link} from "react-router-dom";
import ProductMetka from '../Products/ProductMetka';
import ProductBusiness from '../Products/ProductBusiness';
import {Helmet} from "react-helmet";

const Business = () => {

    

    let state = {
        productsPage: {
            productsData: [
                {img: "/img/products/business/.png", name: "Комплект Внедрение 'Базовое' ", benefit1: "Доступно: до 50 меток", benefit2: "Фирменный дизайн", benefit3: "Ограниченный функционал сайта", benefit4: "Оплата чаевых", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Галактика'. Подскажите, есть ли в наличии?", price: "от 3 990 ₽"},
                {img: "/img/products/business/.png", name: "Комплект Внедрение 'Оптимальное'", benefit1: "Доступно: 100 меток", benefit2: "Фирменный дизайн", benefit3: "Расширенный функционал сайта", benefit4: "Бесплатная установка", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Матрица'. Подскажите, есть ли в наличии?", price: "от 9 990 ₽"},
                
                {img: "/img/products/business/.png", name: "Комплект Внедрение 'Премиум'", benefit1: "Неограниченное кол-во меток", benefit2: "Фирменный спец. дизайн", benefit3: "Функционал под ваши любые задачи", benefit4: "Рекламная сеть NFC-M", message: "https://wa.me/+79950112164?text=Здравствуйте! Меня заинтересовала NFC-Метка 'Арктика'. Подскажите, есть ли в наличии?", price: "от 19 990 ₽"},
            ]
        }
    }

    let productsElements = state.productsPage.productsData.map((product) => <ProductBusiness name={product.name} img={product.img} benefit1={product.benefit1} benefit2={product.benefit2} benefit3={product.benefit3} benefit4={product.benefit4} message={product.message} price={product.price} /> );


    return (

        <div itemscope itemtype="https://schema.org/Product" className={styles.content}>

            <Helmet>
                    
                    <meta name="description"content="Внедрение фирменных NFC-Меток в бизнес"/>
            </Helmet>

                <div className={styles.name}>
                    <h1 itemprop="name">Для бизнеса</h1>
                </div>

                <div className={styles.products}>
                    {productsElements}

                </div>

        </div>
      
    );
  }
  
  export default Business;
  