import { useEffect, useState } from 'react'

interface UseScrollHeaderOptions {
  stickyPoint?: number
  hideOffset?: number
}

export const useScrollHeader = ({
  stickyPoint = 200,
  hideOffset = 250,
}: UseScrollHeaderOptions = {}) => {
  const [isSticky, setIsSticky] = useState(false)
  const [hideMenu, setHideMenu] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const onScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > stickyPoint) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
        setHideMenu(false)
      }

      if (currentScroll > lastScroll && currentScroll > stickyPoint + hideOffset) {
        setHideMenu(true)
      }

      if (currentScroll < lastScroll) {
        setHideMenu(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [stickyPoint, hideOffset])

  return { isSticky, hideMenu }
}
