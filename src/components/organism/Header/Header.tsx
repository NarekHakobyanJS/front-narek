import { HeaderTop } from '../../molecule/HeaderTop/HeaderTop'
import { HeaderBottom } from '../../molecule/HeaderBottom/HeaderBottom'
import { useScrollHeader } from '../../../shared/hooks/UseScrollHeaderOptions'

import style from './Header.module.css'

export const Header = () => {


  const { isSticky, hideMenu } = useScrollHeader({
    stickyPoint: 200,
    hideOffset: 250,
  })

  return (
    <header
      className={`
        ${style.header}
        ${isSticky ? style.sticky : ''}
        ${hideMenu ? style.hidden : ''}
      `}
    >
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}
