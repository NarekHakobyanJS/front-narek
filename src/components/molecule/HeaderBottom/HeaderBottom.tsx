import style from './HeaderBottom.module.css'
import { navigations } from '../../../shared/data/navigation'
import { NavigationTitle } from '../../atom/NavigationTitle/NavigationTitle'
import { Arrow } from '../../atom/Arrow/Arrow'
import SubMenu from '../SubMenu/SubMenu'

export const HeaderBottom = () => {
  return (
    <nav className={style.nav}>
      {
        navigations.map((navigation) => {
          return (
            <ul className={style.navItem}>
              < NavigationTitle title={navigation.title} />
              {navigation.isIcon && <Arrow />}
              {/* < SubMenu /> */}
            </ul>

          )
        })
      }
    </nav>
  )
}
