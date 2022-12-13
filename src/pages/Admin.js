import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import { Context } from '..';
import CarList from '../components/CarList';

import CreateCar from "../components/modals/CreateCar";
import UpdateCar from '../components/modals/UpdateCar';
import { fetchCars } from '../http/carAPI';
// import CreateType from "../components/modals/CreateType";
// import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
    const [carVisible, setCarVisible] = useState(false)
    const [carUpdating, setCarUpdating] = useState(0)
    const {car} = useContext(Context)
    console.log(carUpdating ? true : false);
   
    useEffect(() => {
        fetchCars().then((data) => {
            car.setCars(
                data.sort(function compareNumbers(a, b) {
                    return a.id - b.id;
                })
            );
            car.setTotalCount(data.length);
        });

        
    }, [car]);
    
    // const [typeVisible, setTypeVisible] = useState(false)
    // const [carVisible, setCarVisible] = useState(false) 

    return (
        <Container className="d-flex flex-column">
            {/* <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button> */}
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCarVisible(true)}
            >
                Добавить автомобиль
            </Button>
            <CarList button="Редактировать" buttonClick={setCarUpdating }/>
            {/* <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/> */}
            <CreateCar show={carVisible} onHide={() => setCarVisible(false)}/>
            <UpdateCar id={carUpdating} show={carUpdating ? true : false} onHide={() => setCarUpdating(0)}/>

            {/* <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/> */}
        </Container>
    );
};

export default Admin;
