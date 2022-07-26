import axios from 'axios'

const axiosBook = axios.create({
    baseURL: 'http://localhost:5000'
});

export default axiosBook;