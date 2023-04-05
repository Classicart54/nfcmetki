import React, { Component }  from 'react';
import styles from '../../scss/About.module.scss'
import { motion } from 'framer-motion';



const textAnim = {

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

const imgAnim = {

  hidden: {
    x: -100,
    opacity: 0,
  },

  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.1 , duration: 1 },
    
  }),
}

const About = () => {
    return (

      <div name="about" className={styles.about}>

        <div className={styles.title_text}>
            <h1 className={styles.headline}>О нас</h1>
        </div>

        

        <div itemscope itemtype="https://schema.org/Organization" className={styles.content}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{amout: 0.2, once: true}}
            transition={{duration: 0.5}}   
            variants={imgAnim}   
            
            className={styles.metka}>
                <img className={styles.img_metka} src="/img/about/example.png" alt="" />

            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{amout: 0.2, once: true}}
              transition={{duration: 0.5}}   
              variants={textAnim} 
            
            
            className={styles.text}>
                <h1 itemprop="description" className={styles.title}>Мы - компания NFC-M</h1>
                <h2 itemprop="description" className={styles.subtitle}>  Наши nfc-метки и карты помогут вам <br/> делиться информацией о вас или вашем<br/> бизнесе за считанные секунды!<br/>
                   
                </h2>
                <h2 className={styles.subtitle}> Электронные визитки NFC-M – это <br/>инновационный способ делиться<br/>информацией и личными данными <br/>с окружающими!</h2>

            </motion.div>
        </div>

      </div>
    );
  }
  
  export default About;
  