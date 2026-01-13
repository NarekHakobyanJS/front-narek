import style from './PostImage.module.css';
import nkar from '../../../shared/assets/1.png';

export const PostImage = () => {
  return (
    <div className={style.postImage}>
        <img src={nkar} alt="nkar" />
    </div>
  )
}
