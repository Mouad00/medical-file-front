import axios, {type AxiosInstance} from 'axios';


interface ApiState {
    loading: boolean;
    data?: any;
    error?: any;
}

const api : AxiosInstance = axios.create({
    baseURL: 'http://localhost:9090'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
},
    async (error) => {
        return await Promise.reject(error);
    }

)



export type {ApiState}
export default api;


