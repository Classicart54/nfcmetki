import React, { Component,useState }  from 'react';
import styles from '../../scss/Queshtions.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Modal from '../Modal/Modal';


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
const Queshtions = () => {

  const [modalActive, setModalActive] = useState(false);
  return (
    <div name="quesh" className={styles.quesh}>

        <div className={styles.content}>
            

            <motion.div 
                initial="hidden"
                whileInView="visible"
                custom={4}
                viewport={{amout: 0.2, once: true}}
                transition={{duration: 0.5}}   
                variants={textAnim}  
            className={styles.info}>
                <h1>Часто задаваемые <span> <br/>вопросы</span></h1>
                <p className={styles.one}>
                    Мы разместили ответы на самые <br/> популярные вопросы клиентов, чтобы  <br/>вам стало понятнее.
                </p>
                <p className={styles.two}>
                    Если не нашли ответ на интересующий  <br/>вас вопрос, то оставьте заявку и наш <br/> менеджер позвонит вам и ответит на <br/> все вопросы.
                </p>

                <button onClick={() => setModalActive(true)} >Оставить заявку</button>
            </motion.div>

            <motion.div 
            
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{amout: 0.2, once: true}}
            transition={{duration: 0.5}}   
            variants={imgAnim}  
            
            className={styles.qq}>
                <Accordion  defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Из чего состоит nfc-метки и карта?
                        </Accordion.Header>
                        <Accordion.Body>
                            Наши NFC-Метки разрабатываются из натуральных элементов. Покрытие делается из эпоксидной смолы, а основа - это полиграфическая вставка, на которой печатается дизайн. 
                            С обратной стороны приклеивается nfc-чип, который как раз и отвечает за то, чтобы метка работала как нужно.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Можно ли на каждого сотрудника изготовить индивидуальную визитку?</Accordion.Header>
                        <Accordion.Body>
                            Да, конечно! Мы специализируемся на разработке не только информационных меток для заведений, но и персональные корпоративные визитки. 
                            На нее можно загрузить информацию о сотруднике и дать ее ему носить на шее с помощью ленточки, которая идет в комплекте.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Смогу ли я самостоятельно настроить свою метку?</Accordion.Header>
                        <Accordion.Body>
                        Да. Наши метки можно настроить полностью самостоятельно. В комплекте к метке идет видео-инструкция, на которой максимально подробно
                        показано, как настроить метку и загрузить на нее любую информацию. Также, она размещена на нашем ютуб-канале, группе в ВК и на сайте!
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Есть ли гарантия у ваших продуктов. Вдруг сломается, что делать?</Accordion.Header>
                        <Accordion.Body>
                        В комплекте с меткой идет гарантия на год. Если у вас она вдруг перестанет работать или начнет плохо сканироваться - вы сможете бесплатно заменить ее
                        или вернуть деньги.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </motion.div>

        </div>

        <Modal active={modalActive} setActive={setModalActive}/>


       
    </div>
  );
}

export default Queshtions;
