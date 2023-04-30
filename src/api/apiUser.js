import axios from 'axios';
import { GET_USER } from './configApi';

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('user_token')}`; // Truyền header token vào request;

    return config;
});

const getUser = async () => {
    try {
        return await axios.get(GET_USER);
    } catch (error) {
        console.log(error);
    }
};

export { getUser };
