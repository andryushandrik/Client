import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._role = ""
        this._user = {}
        this._rent = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    
    setUser(user) {
        this._user = user
    }

    setRent = (rent) => {
        this._rent = rent
    }

    setRole = (role) => {
        this._role = role
    }

    get role() {
        return this._role
    }

    get rent() {
        return this._rent
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
