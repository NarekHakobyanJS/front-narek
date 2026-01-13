interface IPostImages {
    img: string
    img_2x: string
}
interface IPostDescription {
    autor: string
    date: string
    tags: string
    text: string
    title: string
    views: string
}


interface IPost extends IPostImages, IPostDescription {
    
}
export type {IPost, IPostImages, IPostDescription}