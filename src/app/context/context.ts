import { createContext } from "react";
import type { IPost } from "../../shared/types/postData.types";

const PostContext = createContext<null | IPost[]>(null)

export {PostContext}