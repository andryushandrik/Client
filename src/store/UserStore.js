import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._rent = null
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setRent(rent) {
        this._rent = rent
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
