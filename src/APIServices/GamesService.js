import axios from "axios";
import { api_url } from "../utils/consts";

export default class GamesService {

    static async getAll() {
        return await axios.get(api_url + '/photos').then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }

    static async getById(id) {
        return await axios.get(api_url + '/photos/' + id).then((response, error) => {
            if(response.status === 200) {
                return response.data
            } else {
                return error
            }
        })
    }

}