import { PostDescription, PostImage } from '../../atom';

import type { IPost, IPostImages } from '../../../shared/types/postData.types';

import style from './Post.module.css';


type PostPropsType = {
  post: IPost
  onClick : (post : IPost) => void
}

export const Post = ({ post, onClick }: PostPropsType) => {
  
  const images : IPostImages = {img : post?.img, img_2x : post?.img_2x}
  const { img, img_2x, ...descriptions } = post ?? {}

  
  return (
    <div 
    onClick={() => onClick(post)}
    className={style.postBlock}>
      <PostImage images={images} />
      <PostDescription descriptions={descriptions}/>
    </div>
  )
}
