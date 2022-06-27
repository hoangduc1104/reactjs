import axiosClient from "./axiosClient";

const UseApi = {
    getAllTracks: (params) => {
        const url = 'data';
        return axiosClient.get(url, {params})
    }, 
    get: (id) => {
        const url = `track/${id}`;
        return axiosClient.get(url)
    }, 

}

export default UseApi;