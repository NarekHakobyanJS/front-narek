import { useEffect, useState } from 'react';
import { Archive } from '../../organism/Archive/Archive';
import { Header } from '../../organism/Header/Header';
import { postApi } from '../../../api/api';
import type { IPost } from '../../../shared/types/postData.types';

export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  console.log(posts);
  

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
        <Archive />
    </div>
  )
}
