import axios from 'axios';

import { REGISTER, LOGIN } from './configApi';

const register = async (paylod) => {
    try {
        return await axios.post(REGISTER, paylod);
    } catch (error) {
        return error.response;
    }
};

const login = async (paylod) => {
    try {
        return await axios.post(LOGIN, paylod);
    } catch (error) {
        return error.response;
    }
};

export { register, login };
