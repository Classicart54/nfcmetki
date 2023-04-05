import React, { Component }  from 'react';
import styles from '../../scss/Partners.module.scss'


const Partners = (props) => {

    return (
        
      <div className={styles.partners}>
        <div className={styles.content}>
            <div className={styles.headline}>
                <h1>Партнеры</h1>
                <p>Компании, которые нам доверяют</p>
            </div>

            <div className={styles.logotypes}>
                <div className={styles.items}>
                    <a 
                     
                    target="_blank" href="https://vk.com/classicartwebsites"><img src="/img/partners/cws.svg" alt="" /></a>
                    <a 
                      
                    target="_blank" href="https://ci.nsu.ru/"><img src="/img/partners/hci.svg" alt="" /></a>
                    <a 
                    
                    target="_blank" href="https://vk.com/chouchou_eclairs"><img src="/img/partners/chouchou.svg" alt="" /></a>
                    <a 
                    
                    target="_blank" href="http://khan-buz.ru/"><img src="/img/partners/khan_buz.svg" alt="" /></a>
                    <a 
                     
                    target="_blank" href="https://www.dusoran.ru/"><img src="/img/partners/du.svg" alt="" /></a>

                </div>

            </div>

        </div>


        
        

      </div>
    );
  }
  
  export default Partners;
  