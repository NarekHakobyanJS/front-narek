import { Logo } from '../../atom/Logo/Logo';
import SearcIcon from '../../atom/SearcIcon/SearcIcon';
import style from './HeaderTop.module.css';

export const HeaderTop = () => {
  return (
    <div className={style.headerTop}>
      <Logo />
      <SearcIcon />
    </div>
  )
}

