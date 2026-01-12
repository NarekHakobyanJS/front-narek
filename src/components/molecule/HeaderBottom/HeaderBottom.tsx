import style from './HeaderBottom.module.css'
import { navigations } from '../../../shared/data/navigation'
import { NavigationTitle } from '../../atom/NavigationTitle/NavigationTitle'

export const HeaderBottom = () => {
  return (
    <nav className={style.nav}>
        {
            navigations.map((navigation) => {
                return (
                    < NavigationTitle title={navigation.title} />

                )
            })
        }
    </nav>
  )
}
