import styles from '../../../scss/ProductMetka.module.scss';
import React, {useState} from 'react';


const ProductMetka = (props) => {

 

  return (
    
    <div className={styles.main_product}>

            

            <div itemscope itemtype="https://schema.org/Product"  className={styles.content}>

                <div className={styles.prev}>
                    <img itemprop="image" src={props.img} alt="" />
                </div>

                <div className={styles.information}>
                    <h2 itemprop="name">{props.name}</h2>
                    <p itemprop="description">NFC-Метка</p>
                    <hr />
                </div>

                <div className={styles.order}>
                    <p  itemprop="price"><span>1490 руб.</span> 349 руб.</p>
                    <link itemprop="availability" href="https://schema.org/InStock" />

                    <a target="_blank" href={props.message}>Заказать</a>
                </div>

            </div>

            
    </div>


    
  );
}

export default ProductMetka;
