import { useContext } from 'react'
import { Post } from '../../molecule/Post/Post'
import style from './Archive.module.css'
import { PostContext, type PostContextType } from '../../../app/context/context'


export const Archive = () => {
  const {posts, openModalHandler} = useContext(PostContext) as PostContextType

  
  /// esa dzem
  return (
    <div className={style?.archive}>
       {
        posts?.map((post) => <Post key={post.title} post={post} onClick={openModalHandler}/>)
       }
    </div>
  )
}
