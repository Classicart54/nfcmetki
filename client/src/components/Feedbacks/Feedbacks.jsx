import styles from '../../scss/Feedbacks.module.scss'
import Feedback from './Feedback/Feedback';
import React, { Component } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";




import { Pagination, Navigation } from "swiper";

const Feedbacks = () => {

    let state = {
        feedbacksPage: {
            feedbacksData: [
                {logo: "/img/feedbacks/logo.png", name: "Парвиз ", company: "Ташкент", text: "Я сначала не знал, что такое nfc-метки и как это работает. Ребята связались со мной лично, через мое кафе - ташкент. Все объяснили, показали как работает и мы решили работать. Заказал пробную партию меток - установили в заведении. Хотел бы отметить возросший интерес к меткам от посетителей. Мы сделали туда наше меню, люди считывали, смотрели. Очень хорошо зашло. "},
                {logo: "/img/feedbacks/logo.png", name: "Илья Ковалевский", company: "Сеть ресторанов 'Pauerro'", text: "Про технологию nfc раньше слышал, но не мог подумать, что с ее помощью можно делать nfc-метки. Как оказалось, это очень полезная штука, люди пока не особо знают, что это и поэтому с большим интересом сканируют метки. Мы решили разметстить на метке новогодние акции в нашем заведении, узнать о них можно только сканировав метку. И хочу отмтеть, что большое количество людей скинровали и пользовались акцией. Нам понравилось, будем еще работать с NFC-M"},
                {logo: "/img/feedbacks/logo.png", name: "Николай", company: "Бар крафтового пива 'Elizium' ", text: "Мы узнали про NFC-M через их группу в ВК, заинтересовались их предложением. Обещали разработку интерент-платформы бесплатно и внедрение меток. Решили попробовать, за неделю мы согласовали дизайн меток и макет интернет-платформы. В общем за 8 дней ребята сделали метки и установили на столы в нашем заведении. Наши посетители отметили, что это более удобно и современно, чем обычные qr-коды. Так гораздо легче взаимодействовать с постетителями и доносить информацию до клиентов. Думаю, что мы продолжим сотрудничество с компанией. "},

            ]
        }
    }

    let feedbacksElements = state.feedbacksPage.feedbacksData.map((feedback) => <SwiperSlide> <Feedback logo={feedback.logo} name={feedback.name} company={feedback.company} text={feedback.text}/> </SwiperSlide>);

    

    return (
        
      <div name="feedbacks" className={styles.feedbacks}>

        <div className={styles.content}>

            <div className={styles.headline}>
                <h1>Отзывы</h1>
                <p>Нас рекомендуют довольные клиенты</p>
            </div>

        
            <div className={styles.element}>

                <Swiper            
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                   className={styles.swiperswiper}

                >

                        {feedbacksElements}

                </Swiper>

            </div>

            
        </div>

 


 
        

      
      </div>
    );
  }
  
  export default Feedbacks;
  