import style from './HeaderBottom.module.css'
import { navigations } from '../../../shared/data/navigation'
import { NavigationTitle } from '../../atom/NavigationTitle/NavigationTitle'
import { Arrow } from '../../atom/Arrow/Arrow'
import SubMenu from '../SubMenu/SubMenu'
import { ArrowDirection } from '../../../shared/types/arrow.types'

export const HeaderBottom = () => {
  return (
    <nav className={style.nav}>
      {navigations.map((navigation) => (
        <ul key={navigation.title} className={style.navItem}>
          <li className={style.navItemWrapper}>
            <div className={style.navTitle}>
              <NavigationTitle title={navigation.title} />
              {navigation.isIcon && <Arrow direction={ArrowDirection.bottom} />}
            </div>
            
            <SubMenu />
          </li>
        </ul>
      ))}
    </nav>
  )
}
