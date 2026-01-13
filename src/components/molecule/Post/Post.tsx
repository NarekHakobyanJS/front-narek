import { PostImage } from '../../atom/PostImage/PostImage'
import style from './Post.module.css'

export const Post = () => {
  return (
    <div className={style.postBlock}>
      <PostImage />
    </div>
  )
}
