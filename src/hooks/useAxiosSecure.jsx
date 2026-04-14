import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({

    baseURL: "http://localhost:3000"
})

const useAxiosSecure = () => {

    const { user } = useAuth();
    const tokenRef = useRef(user?.accessToken);
    const interceptorRef = useRef(null);

    useEffect(()=>{
        tokenRef.current = user?.accessToken;
    },[user]);

    useEffect(() => {
        interceptorRef.current = axiosSecure.interceptors.request.use(config => {

            config.headers.Authorization = `Bearer ${tokenRef.current}`

            return config;
        })
        return () => {
            if(interceptorRef.current !== null){
                axiosSecure.interceptors.request.eject(interceptorRef.current);
            }
        }
    }, [])



    return axiosSecure;
};

export default useAxiosSecure;