import { useEffect, useState } from 'react'
import { HeaderBottom } from '../../molecule/HeaderBottom/HeaderBottom'
import { HeaderTop } from '../../molecule/HeaderTop/HeaderTop'
import style from './Header.module.css'

export const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [hideMenu, setHideMenu] = useState<boolean>(false)

  const STICKY_POINT = 200
  const HIDE_OFFSET = 250 

  useEffect(() => {
    let lastScroll = 0

    const onScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > STICKY_POINT) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
        setHideMenu(false)
      }

      if (
        currentScroll > lastScroll &&
        currentScroll > STICKY_POINT + HIDE_OFFSET
      ) {
        setHideMenu(true)
      }

      if (currentScroll < lastScroll) {
        setHideMenu(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
