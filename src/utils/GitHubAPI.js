import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
    responseType: "json"
});

export default {

    getUser(username){
        return client.get(`/users/${username}`);
    },

    getFollowers(username){
        return client.get(`/users/${username}/followers`)
    }
}