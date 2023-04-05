import React, { Component }  from 'react';
import styles from '../../scss/Footer.module.scss'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Footer = () => {
    return (
        
      <div className={styles.footer}>

        <div itemscope itemType='https://schema.org/Organization' className={styles.contacts}>
            <a href="/"><img className={styles.logo} src="/img/footer/nfcmlogo.svg" alt="" /></a>
            <h2>Контакты</h2>
            <a itemprop="contactPoint" href="tel:+79996357068">8 (999)-635-70-68</a>
            <a href="mailto:nfcmfuture@gmail.com" itemprop="contactPoint" >nfcmfuture@gmail.com</a>
        </div>

        <div className={styles.navigation}>

            <div className={styles.n}>
                <h3>Навигация</h3>
                <Link to="about"  smooth={true} duration={500}> <p>О нас</p></Link>
                <Link to="work"  smooth={true} duration={500}> <p>Как это работает?</p></Link>
                <Link to="benefit"  smooth={true} duration={500}> <p>Польза</p></Link>
            </div>

            <div className={styles.n}>
                <Link to="products"  smooth={true} duration={500}> <p>Наши продукты</p></Link>
                <Link to="individ"  smooth={true} duration={500}><p>Индивидуальность</p> </Link>
                <Link to="interface"  smooth={true} duration={500}><p>Интерфейсы</p></Link>
            </div>

            <div className={styles.n}>
                <Link to="portfolio"  smooth={true} duration={500}><p>Наши работы</p> </Link>
                <Link to="feedbacks"  smooth={true} duration={500}><p>Отзывы</p> </Link>
                <Link to="quesh"  smooth={true} duration={500}> <p>Ответы на вопросы</p></Link>
            </div>

        </div>

        <div className={styles.links}>

            <div className={styles.logo}>
                <a target="_blank" href="https://vk.com/classicartwebsites"><img src="/img/footer/cwslogo.svg" alt="" /></a>
            </div>
            <div>
                <a target="_blank" href="https://vk.com/nfcmfuture"><img src="/img/footer/vk.svg" alt="" /></a>
                <a target="_blank" href="https://t.me/classicart54"><img src="/img/footer/tg.svg" alt="" /></a>
            </div>

        </div>

       


      
      </div>
    );
  }
  
  export default Footer;
  