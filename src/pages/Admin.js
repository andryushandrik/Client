import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CarList from '../components/CarList';

import CreateCar from "../components/modals/CreateCar";
import UpdateCar from '../components/modals/UpdateCar';
// import CreateType from "../components/modals/CreateType";
// import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
    const [carVisible, setCarVisible] = useState(false)
    const [carUpdating, setCarUpdating] = useState(0)
    console.log(carUpdating ? true : false);
   
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
