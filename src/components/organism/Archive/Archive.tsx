import { Post } from '../../molecule/Post/Post'
import style from './Archive.module.css'


export const Archive = () => {
  return (
    <div className={style?.archive}>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}
