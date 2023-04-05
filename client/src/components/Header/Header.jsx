import styles from '../../scss/Header.module.scss';
import Navbar from './Navbar/Navbar';
import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { newLid } from '../../api/tgMessages';


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


const Header = () => {

    const [modalActive, setModalActive] = useState(false);

    
  return (
    
    <div >



        <header className={styles.header}>  
            
            <Navbar/>
            
            <div  className={styles.main}>
                
                    <motion.div itemscope itemtype="https://schema.org/Offer"

                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                    viewport={{amout: 0.2, once: true}}
                    transition={{duration: 0.5}}   
                    variants={textAnim}         
                    
                    className={styles.text}>

                        <motion.h1 itemprop="offers">NFC - метки и визитки <br/> для Вас и вашего <br/> <span>бизнеса.</span></motion.h1>
                        <motion.h2>Увеличьте узнаваемость, сделайте <br/>
                            шаг навстречу будущему!</motion.h2>
                            <motion.button  onClick={() => setModalActive(true) }  className={styles.btn}>Заказать</motion.button>
                        <Link className={styles.tocatalog} to="products"  smooth={true} duration={500}>
                            <p className={styles.link_catalog}>Каталог</p>
                            <img src="/img/header/arrow.svg" alt="" />
                        </Link>


                    </motion.div>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    custom={4}
                    viewport={{amout: 0.2, once: true}}
                    transition={{duration: 0.5}}   
                    variants={imgAnim}      
                    
                    className={styles.mockups}>

                        <div className={styles.content}>
                            <div className={styles.img_phone}>
                                <img className={styles.mockup} src="/img/header/mockup-phone.png" alt="" />
                            </div>

                            <div className={styles.glassy1}></div>
                            <div className={styles.glassy2}></div>
                        </div>
                    </motion.div>
              
            </div>

            <Modal active={modalActive} setActive={setModalActive}/>
                
                
         

            

        </header>
    </div>
  );
}

export default Header;
