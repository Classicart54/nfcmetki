import React, { Component }  from 'react';
import styles from '../../scss/Photos.module.scss'
import { motion } from 'framer-motion';




const textAnim = {

    hidden: {
      x: -200,
      opacity: 0,
    },

    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.1 , duration: 1 },
      
    }),
}

const Photos = () => {

    return (
        
      <div itemscope itemtype="https://schema.org/Organization" name="portfolio" className={styles.photos}>

        <div className={styles.content}>

            <div className={styles.headline}>
                <h1>Наши работы</h1>
            </div>

            <div className={styles.row}>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                    viewport={{amout: 0.2, once: true}}
                    transition={{duration: 0.5}}   
                    variants={textAnim}   
                className={styles.column}>                
                        <img itemprop="image" src="/img/gallery/1.jpg" alt="" />   
                        <img itemprop="image" src="/img/gallery/4.jpg" alt="" />                
                        <img itemprop="image" src="/img/gallery/7.jpg" alt="" />                    
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    custom={3}
                    viewport={{amout: 0.2, once: true}}
                    transition={{duration: 0.5}}   
                    variants={textAnim}   
                className={styles.column}>              
                        <img itemprop="image" src="/img/gallery/2.jpg" alt="" />   
                        <img itemprop="image" src="/img/gallery/5.jpg" alt="" />
                        <img itemprop="image" src="/img/gallery/8.jpg" alt="" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    custom={5}
                    viewport={{amout: 0.2, once: true}}
                    transition={{duration: 0.5}}   
                    variants={textAnim}   
                className={styles.column}>                   
                    <img itemprop="image" src="/img/gallery/3.jpg" alt="" />
                    <img itemprop="image" src="/img/gallery/6.jpg" alt="" />   
                    <img itemprop="image" src="/img/gallery/9.jpg" alt="" />              
                </motion.div>

            
                
            </div>

            
             
        </div>
        
            <hr />
        

      </div>
    );
  }
  
  export default Photos;
  