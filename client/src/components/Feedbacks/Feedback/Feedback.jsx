import styles from '../../../scss/Feedback.module.scss'

const Feedback = (props) => {

    return (
        
      <div className={styles.feedback}>
        
        <div className={styles.logo}>
            <img src={props.logo} alt="" />

        </div>

        <div className={styles.content}>
            <div className={styles.info}>
                <h1>{props.name}</h1>
                <p className={styles.company_name}>{props.company}</p>
            </div>

            <div className={styles.stars}>
                <img src="/img/feedbacks/star.png" alt="" />
                <img src="/img/feedbacks/star.png" alt="" />
                <img src="/img/feedbacks/star.png" alt="" />
                <img src="/img/feedbacks/star.png" alt="" />
                <img src="/img/feedbacks/star.png" alt="" />
            </div>

            <div className={styles.text}>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default Feedback;
  