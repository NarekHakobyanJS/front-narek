import style from './Logo.module.css';
import logo from '../../../shared/assets/logo.png';

export const Logo = () => {
  return (
    <div className={style.logoBlock}>
      <img className={style.logo} src={logo} alt="logo" />
    </div>
  )
}

