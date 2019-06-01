import axios from 'axios';

const mainAxios = axios.create({
    baseURL: "/"
});

export default mainAxios;
