import { NavigationTitle, Arrow } from '../../atom'

import { subNavigations } from '../../../shared/data/navigation'
import { ArrowDirection } from '../../../shared/types/arrow.types'


import style from './SubMenu.module.css'

export const SubMenu = () => {
  return (
    <ul className={style.subMenu}>
      {
        subNavigations.map((subNavigation) => {
          return (
            <div className={style.subNavTitle} key={subNavigation.id}>
              <NavigationTitle key={subNavigation.id} title={subNavigation.title} subClass='subClass'/>
              {subNavigation.isIcon && <Arrow direction={ArrowDirection.left} />}
            </div>

          )
        })
      }
    </ul>
  )
}
