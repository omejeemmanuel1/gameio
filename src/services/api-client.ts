import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'f42ed5617cbf48a69270a157a1143440'
    }
})