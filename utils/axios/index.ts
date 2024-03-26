import axios from "axios";
import { API_SERVICE_BASEURL } from "../constant";

const axiosAPI_SERVICE_Instance =axios.create({
    baseURL:API_SERVICE_BASEURL,
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true,
    
})

export default axiosAPI_SERVICE_Instance;