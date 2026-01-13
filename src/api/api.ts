import axios from "axios";
import type { IPost } from "../shared/types/postData.types";

class PostApi {
    #baseUrl: string = 'https://cloud.codesupply.co/';

    private axiosConfig() {
        return axios.create({
            baseURL: this.#baseUrl
        })
    }

    public async getPosts() {
        const res = await this.axiosConfig().get<IPost[]>('endpoint/react/data.json')
        return res.data

    }
}

export const postApi = new PostApi()