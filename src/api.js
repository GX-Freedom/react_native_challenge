import axios from "axios";
require('dotenv').config();

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.api_key,
        language: "ko"
    }
});


export const tvApi = {
    getPopular: () => api.get("tv/popular"),
    today: () => api.get("tv/airing_today"),
    weeklyAir: () => api.get("tv/on_the_air"),
    upComing: () => api.get("tv/upcoming"),
    topRated: () => api.get("tv/top_rated"),
    getDetail: () => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    getLatest: () => api.get("tv/latest"),
    postRate: () => api.get(`tv/${id}/rating`, {
        params: {
            guest_session_id: id,
            session_id: id
        }
    }),
    search: (term) => api.get("serach/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    getPopular: () => api.get("movie/popular"),
    upComing: () => api.get("movie/upcoming"),
    topRated: () => api.get("movie/top_rated"),
    getDetail: () => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    getLatest: () => api.get("movie/latest"),
    postRate: () => api.get(`movie/${id}/rating`, {
        params: {
            guest_session_id: id,
            session_id: id
        }
    }),
    search: (term) => api.get("serach/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};
