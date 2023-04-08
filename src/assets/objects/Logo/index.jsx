import AppLogo from "../../img/logo.png"
import styles from './styles.module.css';

function Logo() {
  return(
    <img src={AppLogo} className={styles.logo} alt="" />
  )
}

export default Logo;