import { NavigationTitle, Arrow } from '../../atom'

import { navigations } from '../../../shared/data/navigation'
import { ArrowDirection } from '../../../shared/types/arrow.types'

import { SubMenu } from '../SubMenu/SubMenu';

import style from './HeaderBottom.module.css';


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
