import type { IPost, IPostImages } from '../../../shared/types/postData.types'
import { PostDescription, PostImage } from '../../atom'
import style from './Modal.module.css'

type MoadlPropsType = {
  post: IPost | null
}

export const Modal = ({ post }: MoadlPropsType) => {



  ///Esi refactor
  const images: IPostImages = { img: post?.img ?? '', img_2x: post?.img_2x ?? '' }
  const { img, img_2x, ...descriptions } = post ?? {}



  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <PostImage images={images} />
        <PostDescription descriptions={descriptions} />
      </div>
    </div>
  )
}

