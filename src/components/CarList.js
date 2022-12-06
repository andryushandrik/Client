import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CarItem from "./CarItem";

const CarList = observer((props) => {
    const { car } = useContext(Context);
   console.log(props.button);
   
    return (
        <Row className="d-flex">
            {car.cars.map((car) => (
                <CarItem key={car.id} car={car} button={props.button} buttonClick={props.buttonClick}/>
            ))}
        </Row>
    );
});

export default CarList;
