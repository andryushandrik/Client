import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createCar = async (car) => {
   
    const { data } = await $authHost.post("api/car", car);
    console.log(data);

    return data;
};

export const updateCar = async (id, car) => {
    const { data } = await $authHost.put("api/car/" + id, car);
    return data;
};

export const delCar = async (id) => {
    const { data } = await $authHost.delete("api/car/" + id);
    return data;
};

export const fetchCars = async () => {
    const { data } = await $host.get("api/car");
    return data;
};

export const fetchOneCar = async (id) => {
    const { data } = await $host.get("api/car/" + id);
    console.log("data");
    console.log(data);
    return data;
};

export const startRent = async (carId) => {
    const { data } = await $authHost.post("api/car/" + carId + "/rent");
    console.log(data);
    return data;
};

export const endRent = async (id, probeg) => {
    const { data } = await $authHost.put("api/rent/" + id +"/end", {endprobeg: probeg});
    console.log(data);
    return data;
};

export const fetchActiveRent = async () => {
    const { data } = await $authHost.get("api/rent/active");
    return data;
};

export const fetchMyRent = async () => {
    const { data } = await $authHost.get("api/rent/my");
    console.log(data);
    return data;
};