import { useContext, useEffect, useRef } from 'react'
import style from './SearchInput.module.css'
import { PostContext, type PostContextType } from '../../../app/context/context'

export const SearchInput = () => {
    const { searchText, serachTextHandler } = useContext(PostContext) as PostContextType
    const inputRef = useRef<any>(null)

    useEffect(() => {
        inputRef?.current.focus()
    }, [])

    return (
        < input
            onChange={serachTextHandler}
            value={searchText}
            ref={inputRef}
            className={style.searchInput} placeholder='Search title'
        />
    )
}
