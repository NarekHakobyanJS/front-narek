import { useEffect, useState, type ChangeEvent } from 'react';
import { Archive } from '../../organism/Archive/Archive';
import { Header } from '../../organism/Header/Header';
import { postApi } from '../../../api/api';
import type { IPost } from '../../../shared/types/postData.types';
import { PostContext } from '../../../app/context/context';
import { createPortal } from 'react-dom';
import { Modal } from '../../organism/Modal/Modal';
import { BurgerMenu } from '../../molecule/BurgerMenu/BurgerMenu';


export const Home = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>([])
  const [post, setPost] = useState<IPost | null>(null)
  const [searchText, setSearchText] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)


  let filterPosts = posts.filter((post) => post.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)

  const openBurgerMenu = () => setBurgerMenu(true)
  const closeBurgerMenu = () => setBurgerMenu(false)

  const serachTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const openModalHandler = (post: IPost) => {
    setPost(post)
    setOpenModal(true)
  }

  const closeModalHandler = () => setOpenModal(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postApi.getPosts()
      setPosts(data)
    }

    fetchPosts()

  }, [])



  return (
    <>

      {
        burgerMenu && <BurgerMenu closeBurgerMenu={closeBurgerMenu}/>
      }
      {openModal && createPortal(<Modal post={post} closeModalHandler={closeModalHandler} />, document.getElementById('modal')!)}
      <PostContext.Provider value={{
        posts: filterPosts,
        searchText,
        serachTextHandler,
        openModalHandler,
        openBurgerMenu,
        closeBurgerMenu

      }}>
        <Header />
        <Archive />
      </PostContext.Provider>

    </>
  )
}
