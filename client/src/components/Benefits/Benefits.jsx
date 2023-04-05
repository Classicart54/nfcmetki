import styles from '../../scss/Benefits.module.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { motion } from 'framer-motion';


import React, {useState} from 'react';
import Modal from '../Modal/Modal';


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




const Benefits = () => {

    const [modalActive, setModalActive] = useState(false);


    

  return (
    <div name="benefit" className={styles.benefits}>

        <motion.div 
         initial="hidden"
         whileInView="visible"
         custom={1}
         viewport={{amout: 0.2, once: true}}
         variants={textAnim}
        
        className={styles.text}>
            <h1>Польза</h1>
            <h2>Как NFC-метки и визитки могут сделать вашу <br/>и жизнь вашего бизнеса лучше</h2>
        </motion.div>

        <hr/>

        <motion.div itemscope itemtype="https://schema.org/Organization"
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{amout: 0.2, once: true}}
        variants={textAnim}
        
        className={styles.elements}>

            <div itemprop="makesOffer" itemscope itemtype="https://schema.org/Offer" className={styles.business}>
                <h2>Для бизнеса</h2>

                <div className={styles.glassy}>
                    <div className={styles.item}>
                        <img src="/img/benefits/check.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Функционал</p>
                            <p className={styles.subtitle}>Создаем минисайты, каталоги товаров и <br/> продукции, магазины, презентационные<br/> материалы и документы.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/check.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Это будущее!</p>
                            <p className={styles.subtitle}>NFC-метки помогут вам быстрее доводить <br/> информацию о новых акциях и скидках.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/check.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Новые клиенты</p>
                            <p className={styles.subtitle}>Собирайте клиентов через форму захвата, <br/> настраивайте прием платежей и<br/> масштабируйтесь! </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/check.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Брендирование</p>
                            <p className={styles.subtitle}>Настраиваем под ваши задачи. Дизайн под <br/> бренд или разработка индивидуальных <br/>макетов и функционала.</p>
                        </div>
                    </div>
                </div>

                <button onClick={() => setModalActive(true)} >Оставить заявку</button>

            </div>

            <div itemprop="makesOffer" itemscope itemtype="https://schema.org/Offer" className={styles.clients}>
                <h2>Для личного использования</h2>

                <div className={styles.glassy}>

                <div className={styles.item}>
                        <img src="/img/benefits/checkblue.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Это просто!</p>
                            <p className={styles.subtitle}>Чтобы считать метку - нужно просто поднести <br/> к ней телефон. Ничего устанавливать не нужно! <br/> Нужна лишь поддержка nfc на устройстве</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/checkblue.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Скорость</p>
                            <p className={styles.subtitle}>Мгновенно делитесь своим профилем: <br/> социальными сетями, контактами, видео, <br/> ссылками и т. д.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/checkblue.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Удобство</p>
                            <p className={styles.subtitle}>С nfc-меткой или визиткой вы навсегда <br/> забудете про бумажные визитки. Давайте <br/> побережем природу! </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="/img/benefits/checkblue.svg" alt="" />
                        <div className={styles.text}>
                            <p className={styles.title}>Автономность</p>
                            <p className={styles.subtitle}>Наши метки и визитки могут работать <br/> вечно! Заряжать или менять батарейки не придется. А еще они водонепроницаемы.</p>
                        </div>
                    </div>

                </div>

                <a className={styles.tocatalog} href=""><Link to="products"  smooth={true} duration={500}> Каталог</Link></a>

            </div>

        </motion.div>

        <Modal active={modalActive} setActive={setModalActive}/>


        


        
        
        
    </div>
  );
}

export default Benefits;
