import { Logo, SearchIcon } from '../../atom';

import style from './HeaderTop.module.css';

export const HeaderTop = () => {
  return (
    <div className={style.headerTop}>
      <Logo />
      <SearchIcon />
    </div>
  )
}

