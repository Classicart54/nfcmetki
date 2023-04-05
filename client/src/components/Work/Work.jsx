import React, { Component }  from 'react';
import styles from '../../scss/Work.module.scss'
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

const Work = () => {
    return (
      <motion.div 
      initial="hidden"
      whileInView="visible"
      custom={4}
      viewport={{amout: 0.2, once: true}}
      variants={textAnim}
      
      name="work" className={styles.work}>

        <div className={styles.title_text}>
            <h1 className={styles.headline}>Как это работает?</h1>
        </div>

        <div className={styles.content}>
            <div className={styles.text}>
                <h3 className={styles.info}>Если человек, ваш клиент, кто угодно, <br/> считает нашу NFC-метку или карту, то <br/> он сможет:</h3>
                <ul>
                    <li><span>Увидеть и сохранить ваши контакты;</span></li>
                    <li><span>Перейти в ваши соц. сети;</span></li>
                    <li><span>Попасть на ваш сайт;</span></li>
                    <li><span>Сразу попасть в ваше портфолио;</span></li>
                    <li><span>Подключить Bitcoin-кошелек;</span></li>
                </ul>

                <h3>NFC-метку можно приклеить на любую <br/> поверхность, а ее покрытие из эпоксидной <br/> смолы абсолютно натурально и защитит ее <br/> от механических повреждений и воды. </h3>

            </div>

            <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vsjwI357Lfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


      </motion.div>
    );
  }
  
  export default Work;
  