import { HeaderBottom } from '../../molecule/HeaderBottom/HeaderBottom'
import { HeaderTop } from '../../molecule/HeaderTop/HeaderTop'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style?.header}>
       <HeaderTop />
       <HeaderBottom />
    </header>
  )
}

