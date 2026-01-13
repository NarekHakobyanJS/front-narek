import { useState } from 'react';
import { Logo, SearchIcon, SearchInput } from '../../atom';

import style from './HeaderTop.module.css';

export const HeaderTop = () => {
  const [isSearchInput, setIsSearchInput] = useState<boolean>(false)
  
  const openOrCloseInput = () => setIsSearchInput(prev => !prev)


  return (
    <div className={style.headerTop}>
      <Logo />
      {
      isSearchInput && < SearchInput />
      }
      <SearchIcon onClick={openOrCloseInput}/>
    </div>
  )
}

