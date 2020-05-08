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

    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.log('Obsolete method. Please, use ProfileAPI')
        return  profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return  instance.put(`profile/status/`, {status: status})
    }

}

export const authAPI = {
   me (){
      return  instance.get(`auth/me`)
   },
   login (email, password, rememberMe = false){
      return  instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout() {
      return instance.delete(`auth/login`)
   },
}

