import { makeAutoObservable } from "mobx";

export default class CarStore {
    constructor() {
        this._cars = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }

    setCars(cars) {
        this._cars = cars;
    }

    setPage(page) {
        this._page = page;
    }
    setTotalCount(count) {
        this._totalCount = count;
    }

    get cars() {
        return this._cars;
    }

    get totalCount() {
        return this._totalCount;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}
