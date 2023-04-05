import React, { Component, useState }  from 'react';
import styles from '../../scss/Contacts.module.scss'
import { newLid } from "../../api/tgMessages";




const Contacts = ({ active, setActive }) => {

  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [question, setQuestion] = useState('')
  const [timeStr, setTimeStr] = useState('')
  const [isOrderDone, setIsOrderDone] = useState(false)


  const submitHandler = async () => {
    await newLid(name, phone, companyName, question)
    setIsOrderDone(true)

  }
    return (

      
        
      <div className={styles.contacts}>


        <div className={styles.content}>
          <div className={styles.text_info}>
            <h1 className={styles.headline}>Свяжитесь с нами!</h1>
            <p className={styles.info}>
            Если у вас остались вопросы или вы <br/> хотите заказать NFC-метки / карты<br/> для своего заведения, то оставьте <br/>заявку.
            </p>
            <p className={styles.manager}>Наш менеджер свяжется с вами и во<br/> всем проконсультирует!</p>
          </div>

          <div className={styles.form}>

            <h1>Получить консультацию</h1>

            <div className={styles.enter}>
            <input type="text" placeholder="Ваше имя*" value={name}
              onChange={e => setName(e.target.value)} />
            <input value={phone}
              onChange={e => setPhone(e.target.value)}
              type="text" placeholder="Номер телефона*" />
            
            <textarea placeholder='Вкратце опишите суть вопроса'
              value={question} onChange={e => setQuestion(e.target.value)}
              name="" id="" cols="30" rows="1"></textarea>
            <button onClick={() => { submitHandler() }}>Оставить заявку</button>
            </div>
            
            
          </div>

        </div>





        

      
      </div>
    );
  }
  
  export default Contacts;
  