import styles from './ProductCard.module.scss';
import React, {useState} from 'react';


const ProductCard = (props) => {

 

  return (
    
    <div className={styles.main_product}>

            

            <div itemscope itemtype="https://schema.org/Product" className={styles.content}>

                <div className={styles.prev}>
                    <img itemprop="image" src={props.img} alt="" />
                </div>

                <div className={styles.information}>
                    <h2 itemprop="name">{props.name}</h2>
                    <p itemprop="description">NFC-Карта</p>
                    <hr />
                </div>

                <div className={styles.order}>
                    <p itemprop="price"><span>1490 руб.</span> 990 руб.</p>
                    <link itemprop="availability" href="https://schema.org/InStock" />
                    <a target="_blank" href={props.message}>Заказать</a>
                </div>

            </div>

            
    </div>


    
  );
}

export default ProductCard;
