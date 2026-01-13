import { useState } from 'react';
import { Logo, SearchIcon, SearchInput } from '../../atom';
import { GiHamburgerMenu } from "react-icons/gi";
import style from './HeaderTop.module.css';

export const HeaderTop = () => {
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false)
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const openOrCloseInput = () => setIsSearchInput(prev => !prev)


  console.log(burgerMenu);
  
  return (
    <div className={style.headerTop}>

      <GiHamburgerMenu className={style.burgerMenu} onClick={() => setBurgerMenu(true)} />

      <Logo />
      {
        isSearchInput && < SearchInput />
      }
      <SearchIcon onClick={openOrCloseInput} />
    </div>
  )
}

