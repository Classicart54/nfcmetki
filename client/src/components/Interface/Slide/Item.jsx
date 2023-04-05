import React, { Component }  from 'react';
import styles from '../../../scss/Item.module.scss';


const Item = (props) => {
  return (
    <div className={styles.slide}>

        <img src={props.img} alt="" />

       
    </div>
  );
}

export default Item;
