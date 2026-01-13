import { useEffect, useState, type ChangeEvent } from 'react';
import { Archive } from '../../organism/Archive/Archive';
import { Header } from '../../organism/Header/Header';
import { postApi } from '../../../api/api';
import type { IPost } from '../../../shared/types/postData.types';
import { PostContext } from '../../../app/context/context';
import { createPortal } from 'react-dom';
import { Modal } from '../../organism/Modal/Modal';


export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)


  let filterPosts = posts.filter((post) => post.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)


  const serachTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postApi.getPosts()
      setPosts(data)
    }

    fetchPosts()

  }, [])



  return (
    <>
      {openModal &&  createPortal(<Modal />, document.getElementById('modal')!) }
      <PostContext.Provider value={{ posts: filterPosts, searchText, serachTextHandler }}>
        <Header />
        <Archive />
      </PostContext.Provider>

    </>
  )
}
