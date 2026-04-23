import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: "https://zap-server-production.up.railway.app"
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;