import "./ModalBusiness.scss"
import React, { useState } from 'react';
import { newLid } from "../../api/tgMessages";



const Modal = ({ active, setActive }) => {


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
    <div className={active ? "modall active" : "modall "} onClick={() => setActive(false)}>
      <div className={active ? "modal_content active" : "modal_content "} onClick={e => e.stopPropagation()}>

        <div className="content">
          <div className="text">
            <h1>Оставьте заявку <span>на внедрение <br />
              nfc-меток в ваш сервис.</span></h1>
            <hr />
            <p>Наш менеджер перезвонит вам <br />
              в рабочее время</p>
          </div>

          <div className="form">
            <h2>Получить бесплатную консультацию</h2>
            <input type="text" placeholder="Ваше имя*" value={name}
              onChange={e => setName(e.target.value)} />
            <input value={phone}
              onChange={e => setPhone(e.target.value)}
              type="text" placeholder="Номер телефона*" />
            <input onChange={e => setCompanyName(e.target.value)} value={companyName}
              type="text" placeholder="Название компании*" />
            <textarea placeholder='Вкратце опишите суть вопроса'
              value={question} onChange={e => setQuestion(e.target.value)}
              name="" id="" cols="30" rows="1"></textarea>
            <button onClick={() => { setActive(false); submitHandler() }}>Оставить заявку</button>
          </div>

        </div>

      </div>
    </div>


  );
}

export default Modal;
