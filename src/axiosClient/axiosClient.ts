import axios from "axios"

const axiosClient = axios.create({
    baseURL: "http://localhost:3000/"
})

axiosClient.interceptors.response.use(
    (response) => new Promise((resolve) => setTimeout(() => resolve(response), 3000)),
    (error) => new Promise((_, reject) => setTimeout(() => reject(error), 3000))
)

export default axiosClient