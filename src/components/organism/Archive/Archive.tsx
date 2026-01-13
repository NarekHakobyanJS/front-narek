import { useContext } from 'react'
import { Post } from '../../molecule/Post/Post'
import style from './Archive.module.css'
import { PostContext } from '../../../app/context/context'


export const Archive = () => {
  const posts = useContext(PostContext)
  return (
    <div className={style?.archive}>
       {
        posts?.map((post) => <Post key={post.title} post={post}/>)
       }
    </div>
  )
}
