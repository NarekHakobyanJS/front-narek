import { PostDescription, PostImage } from '../../atom';

import type { IPost } from '../../../shared/types/postData.types';

import style from './Post.module.css';


type PostPropsType = {
  post: IPost
}

export const Post = ({ post }: PostPropsType) => {

  return (
    <div className={style.postBlock}>
      <PostImage image={post.img} />
      <PostDescription />
    </div>
  )
}
