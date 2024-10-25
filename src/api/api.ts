import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://d9f2a1a625704abf.mokky.dev",
});

// Handle all configuration of request
api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle errors of all responses
api.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err?.message === "Network Error") {
      //   setIsNetworkErr(true);
      return Promise.reject(null);
    }
    return Promise.reject(err.response?.data);
  }
);

// Determine the percentage of uploading
export const apiProgress = (
  progressEvent: any,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) => {
  const percentCompleted = Math.floor(
    (progressEvent.loaded * 100) / progressEvent.total
  );
  setProgress(percentCompleted);
};

export default api;
