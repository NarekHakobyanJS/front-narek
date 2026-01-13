import { useContext, useState } from 'react';
import { Logo, SearchIcon, SearchInput } from '../../atom';
import { GiHamburgerMenu } from "react-icons/gi";
import style from './HeaderTop.module.css';
import { PostContext, type PostContextType } from '../../../app/context/context';

export const HeaderTop = () => {
  const {openBurgerMenu} = useContext(PostContext) as PostContextType
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false)
  const openOrCloseInput = () => setIsSearchInput(prev => !prev)


  
  return (
    <div className={style.headerTop}>

      <GiHamburgerMenu className={style.burgerMenu} onClick={openBurgerMenu} />

      <Logo />
      {
        isSearchInput && < SearchInput />
      }
      <SearchIcon onClick={openOrCloseInput} />
    </div>
  )
}

