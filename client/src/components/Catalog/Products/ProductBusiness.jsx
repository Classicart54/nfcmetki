import styles from './ProductBusiness.module.scss';
import React, {useState} from 'react';
import ModalBusiness from '../../Modal/ModalBusiness'
import { Link } from 'react-scroll';

const ProductBusiness = (props) => {

  const [modalActive, setModalActive] = useState(false);
    

 

  return (

    
    <div className={styles.main_product}>

            

            <div itemscope itemtype="https://schema.org/Product" className={styles.content}>



                <div className={styles.information}>
                    <h2 itemprop="name">{props.name}</h2>

                    <div className={styles.prev}>
                      
                    <ul itemprop="description">
                      <li>{props.benefit1}</li>
                      <li>{props.benefit2}</li>
                      <li>{props.benefit3}</li>
                      <li>{props.benefit4}</li>
                    </ul>

                    </div>
                      <p >Внедрение в бизнес</p>
                    <hr />
                </div>

                <div className={styles.order}>
                    <p itemprop="price"> {props.price}</p>
                    <link itemprop="availability" href="https://schema.org/InStock" />

                    <button onClick={() => setModalActive(true)} >Оставить заявку</button>
                </div>

            </div>

            <ModalBusiness active={modalActive} setActive={setModalActive}/>

            
    </div>


    
  );
}

export default ProductBusiness;
