import type { IPostDescription } from '../../../shared/types/postData.types'
import style from './PostDescription.module.css'


type PostDescriptionPropsType = {
    descriptions : IPostDescription
}
export const PostDescription = ({descriptions} : PostDescriptionPropsType) => {
    
    return (
        <div className={style.postDescription}>
            <p className={style.lifeStyle}>lifeStyle</p>
            <h3 className={style.postTitle}>{descriptions?.title}</h3>

            <div className={style.postAuthor}>
                <p className={style.author}>{descriptions?.autor}</p>
                <p className={style.date}>{descriptions?.date}</p>
                <p className={style.view}>{descriptions?.views}</p>
            </div>

            <p className={style.postText}>
            {
                descriptions?.text
            }
            </p>
        </div>
    )
}

