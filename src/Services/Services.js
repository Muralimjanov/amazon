import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const getPost = () =>{
    return axios.get("/products");
}