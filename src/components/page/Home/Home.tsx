import { useEffect, useState } from 'react';
import { Archive } from '../../organism/Archive/Archive';
import { Header } from '../../organism/Header/Header';
import { postApi } from '../../../api/api';
import type { IPost } from '../../../shared/types/postData.types';
import { PostContext } from '../../../app/context/context';


export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postApi.getPosts()
      setPosts(data)
    }

    fetchPosts()

  }, [])
  
  return (
    <div>
      <Header />
      <PostContext.Provider value={posts}>
        <Archive />
      </PostContext.Provider>

    </div>
  )
}
