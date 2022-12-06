import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { CAR_ROUTE } from "../utils/consts";

const CarItem = (props) => {

    const history = useHistory();


    return (
        <Col
            md={3}
            className={"mt-3"}
            /* onClick={() => history.push(CAR_ROUTE + '/' + props.car.id)} */ 
        >
            <Card style={{ width: 150, cursor: "pointer" }} className="p-3 w-100">
                <div className="text-black-50 mt-1 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column align-items-left">
                        <div>Модель: {props.car.model}</div>
                        <div>Номер:{props.car.id}</div>
                        <div>Год выпуска: {props.car.year}</div>
                        <div>Пробег: {props.car.probeg}</div>
                        {props.car.inRent ? <div className="text-danger">Занята</div>: <div  className="text-success">Свободна</div>}
                        
                    </div>
                    <div className="d-flex mt-1 align-items-right justify-content-end">
                    <Button onClick={() => props.buttonClick(props.car.id)} variant={"outline-dark"}> {props.button} </Button>

                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default CarItem;
