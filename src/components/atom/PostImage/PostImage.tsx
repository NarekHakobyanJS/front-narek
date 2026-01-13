import style from './PostImage.module.css';

type PostImagePropsType = {
  image: string
}

export const PostImage = ({ image }: PostImagePropsType) => {
  return (
    <div className={style.postImage}>
      <img src={image} alt="nkar" />
    </div>
  )
}
