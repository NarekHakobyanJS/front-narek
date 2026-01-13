import type { IPostImages } from '../../../shared/types/postData.types';
import style from './PostImage.module.css';


type PostImagePropsType = {
  images : IPostImages
}

export const PostImage = ({ images }: PostImagePropsType) => {
  return (
    <div className={style.postImage}>
      <img src={images.img} alt="nkar" />
    </div>
  )
}
