import { createContext, type ChangeEvent } from "react";
import type { IPost } from "../../shared/types/postData.types";

type PostContextType = {
    posts : IPost[]
    searchText : string
    serachTextHandler : (e : ChangeEvent<HTMLInputElement>) => void
}
const PostContext = createContext<{} | PostContextType>({})

export {PostContext}
export type {PostContextType}