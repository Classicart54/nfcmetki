import React, { Component }  from 'react';
import styles from '../../scss/Interface.module.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Item from './Slide/Item';
import { motion } from 'framer-motion';





const textAnim = {

  hidden: {
    y: -100,
    opacity: 0,
  },

  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.1 , duration: 1 },
    
  }),
}

const imgAnim = {

  hidden: {
    x: 100,
    opacity: 0,
  },

  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.1 , duration: 1 },
    
  }),
}

const Interface = () => {

  let state = {
    slidesPage: {
      itemData: [
        {img: "/img/slides/one.png"},
        {img: "/img/slides/two.png"},
        {img: "/img/slides/three.png"},
        {img: "/img/slides/four.png"},
        {img: "/img/slides/five.png"},
        {img: "/img/slides/six.png"},
      ]
    }
  }

  let slidesElements = state.slidesPage.itemData.map((slide) => <SwiperSlide><Item img={slide.img}/></SwiperSlide>);

    return (
      <div name="interface" className={styles.interface}>
        <div className={styles.content}>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{amout: 0.2, once: true}}
              variants={textAnim}

            className={styles.text}>
                <h1>Как выглядит интерфейс?</h1>
                <p>Мы можем настроить функционал сервиса под ваши любые потребности. <br/>
                    Это ссылки на ваши соц. сети, сайт, контактные данные и многое другое!<br/>
                    Вашему клиенту нужно будет только приложить свой телефон и все данные<br/> сохранятся на его устройстве.<br/>
                    <span> <a href="http://nfc-m.online/">Согласитесь, это правда полезно!</a> </span>    </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{amout: 0.2, once: true}}
              variants={textAnim}
            className={styles.phone}>
              
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={true}


                navigation={true}
                modules={[Navigation]}
                className={styles.swipermain}
                >

                {slidesElements}

              </Swiper>

            </motion.div>
            
        </div>

      </div>
      
      
    );
  }
  
  export default Interface;
  