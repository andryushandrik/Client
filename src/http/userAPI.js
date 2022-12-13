import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password,name) => {
    const {data} = await $host.post('api/registration', {login :email, password,name, role: 'USER'})
    localStorage.setItem('token', data.token)
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/login', {login : email, password})
    localStorage.setItem('token', data.token)
    localStorage.setItem('role', data.role.toUpperCase())

    return data
}

export const check = async () => {
    const {data} = await $authHost.get('api/check' )
    localStorage.setItem('token', data.token)
    console.log(data.token);
    return jwt_decode(data.token)
}
