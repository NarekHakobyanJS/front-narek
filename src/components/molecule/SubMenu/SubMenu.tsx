import { subNavigations } from '../../../shared/data/navigation'
import { ArrowDirection } from '../../../shared/types/arrow.types'
import { Arrow } from '../../atom/Arrow/Arrow'
import { NavigationTitle } from '../../atom/NavigationTitle/NavigationTitle'

import style from './SubMenu.module.css'

const SubMenu = () => {
  return (
    <ul className={style.subMenu}>
      {
        subNavigations.map((subNavigation) => {
          return (
            <div className={style.subNavTitle}>
              <NavigationTitle key={subNavigation.id} title={subNavigation.title} />
              {subNavigation.isIcon && <Arrow direction={ArrowDirection.left} />}
            </div>

          )
        })
      }
    </ul>
  )
}

export default SubMenu