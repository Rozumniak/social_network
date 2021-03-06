import * as axios from "axios";

const instance = axios.create({

    withCredentials: true,
    headers: {
        'API-KEY': 'cc3bd8cc-4d54-4fd5-94a6-1a89051413f6'
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,

});



export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form/data'}})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}
export const loginAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const authMe = () => {
    return instance.get(`auth/me`)
}