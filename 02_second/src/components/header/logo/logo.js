import logo from './logo.svg';
import styles from './logo.module.css';
export const Logo = () => {
    return (<img alt="Logo" src={logo} className='w-20'/>
        //  className={styles.logoSize} 
    )
}