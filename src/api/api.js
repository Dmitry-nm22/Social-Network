import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "83fa63a5-4903-4b28-a5ff-4c6d935579f7"
    }
})

export const usersAPI = {
    getUsers (currentPage,pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    }

}

