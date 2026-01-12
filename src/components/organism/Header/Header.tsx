import { HeaderBottom } from '../../molecule/HeaderBottom/HeaderBottom'
import { HeaderTop } from '../../molecule/HeaderTop/HeaderTop'
import SubMenu from '../../molecule/SubMenu/SubMenu'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style?.header}>
       <HeaderTop />
       <HeaderBottom />
       {/* <SubMenu /> */}
    </header>
  )
}

