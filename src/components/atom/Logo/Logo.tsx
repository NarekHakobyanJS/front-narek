import logo from '../../../shared/assets/logo.png';

import style from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={style.logoBlock}>
      <img className={style.logo} src={logo} alt="logo" />
    </div>
  )
}

