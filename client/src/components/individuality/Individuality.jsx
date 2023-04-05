import React, { Component }  from 'react';
import styles from '../../scss/Individuality.module.scss'
import { motion } from 'framer-motion';



const textAnim = {

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



const Individual = () => {

    return (
        
      <div name="individ" className={styles.individ}>

        <h1>Индивидуальность</h1>

        <div className={styles.content}>

            <motion.div 

              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{amout: 0.2, once: true}}
              transition={{duration: 0.5}}   
              variants={textAnim}  

            className={styles.text}>
                <h2><span>Индивидуальный дизайн</span> <br/> для вашей метки или<br/> карты</h2>
                <p>Если хочешь выделиться - оставь <br/> заявку на индивидуальный дизайн<br/> метки или карты. <br/>
                    Дополнительная стоимость за<br/> индивидуальный дизайн +500 руб.</p>

                <a target="_blank" href="https://wa.me/+79950112164?text=Здравствуйте! Хочу (напишите какой товар вы хотели бы *метка/карта/брелок*) с индивидуальным дизайном!" >Оставить заявку</a>
            </motion.div>

            <div className={styles.img}>
                <img src="/img/individual/individual.png" alt="" />
            </div>

        </div>
        



        

      </div>
    );
  }
  
  export default Individual;
  