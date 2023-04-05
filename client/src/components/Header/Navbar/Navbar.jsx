import styles from '../../../scss/Navbar.module.scss';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Navbar = () => {
  return (
    <body>    

        <nav itemscope itemtype="https://schema.org/Organization" className={styles.nav}>
            <a href="/"><img itemprop="logo" className={styles.logo} src="/img/header/logo.svg" alt="" /></a>

            <ul className={styles.links}>
                
                <li className={styles.link}> <Link to="about"  smooth={true} duration={500}> О нас</Link></li>
                <li className={styles.link}> <Link to="work"  smooth={true} duration={500}> Как это работает?</Link></li>
                <li className={styles.link}> <Link to="benefit"  smooth={true} duration={500}> Польза</Link></li>
                
                <li className={styles.link}> <Link to="products" ssmooth={true} duration={500}> Наши продукты</Link></li>
                <li className={styles.link}> <Link to="portfolio"  smooth={true} duration={500}> Наши работы</Link></li>
                <li className={styles.link}> <Link to="feedbacks"  smooth={true} duration={500}> Отзывы</Link></li>
            </ul>

            <a itemprop="telephone" className={styles.num} href="tel:+79996357068">8 (999)-635-70-68</a>
        </nav>


    </body>
  );
}

export default Navbar;
