import style from './PostDescription.module.css'

const PostDescription = () => {
    return (
        <div className={style.postDescription}>
            <p className={style.lifeStyle}>lifeStyle</p>
            <h3 className={style.postTitle}>Eat Right For Your Exercise Regime</h3>

            <div className={style.postAuthor}>
                <p className={style.author}>Niek Bove</p>
                <p className={style.date}>April 6</p>
                <p className={style.view}> 4000wive</p>
            </div>

            <p className={style.postText}>
            Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…
            </p>
        </div>
    )
}

export default PostDescription