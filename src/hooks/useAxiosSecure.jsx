import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: "http://localhost:3000"
})

const useAxiosSecure = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        // ✅ CHANGED: Added 'async' keyword here
        const requestInterceptor = axiosSecure.interceptors.request.use(
            async (config) => {
                // ✅ CHANGED: Replaced user.accessToken with await user.getIdToken(false)
                if (user) {
                    try {
                        const token = await user.getIdToken(false);
                        config.headers.Authorization = `Bearer ${token}`;
                    } catch (error) {
                        console.error('Error getting token:', error);
                    }
                }
                return config;
            },
            // ✅ ADDED: Error handler for request interceptor
            (error) => {
                return Promise.reject(error);
            }
        );

        // ✅ CHANGED: Made this async to handle token refresh
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            }, 
            async (error) => {  // ✅ CHANGED: Added 'async' keyword
                // ✅ ADDED: Store original request for retry
                const originalRequest = error.config;
                
                // ✅ CHANGED: Fixed error.status to error.response?.status
                // ✅ ADDED: Token refresh and retry logic
                if ((error.response?.status === 401 || error.response?.status === 403) 
                    && !originalRequest._retry) {
                    
                    originalRequest._retry = true;
                    
                    try {
                        // ✅ ADDED: Force refresh the token with getIdToken(true)
                        const freshToken = await user.getIdToken(true);
                        originalRequest.headers.Authorization = `Bearer ${freshToken}`;
                        
                        // ✅ ADDED: Retry the original request with new token
                        return axiosSecure(originalRequest);
                    } catch (refreshError) {
                        // ✅ ADDED: Better error handling
                        console.error('Token refresh failed:', refreshError);
                        await logout();
                        navigate('/signin');
                        return Promise.reject(refreshError);
                    }
                }
                
                // ✅ REMOVED: Old console.log and moved logout logic inside try-catch
                return Promise.reject(error);
            }
        );

        return () => {
            // ✅ FIXED: Changed axios to axiosSecure
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        }

    }, [user, logout, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;