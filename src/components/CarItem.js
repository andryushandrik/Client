import React, { useState, useEffect, useContext } from "react";
import { Card, Col, Button, Form } from "react-bootstrap";
import { delCar, endRent } from "../http/carAPI";
import { ADMIN_ROUTE, CAR_ROUTE } from "../utils/consts";
import { Context } from "..";
import { useLocation } from "react-router-dom";

const CarItem = (props) => {
    const location = useLocation();
    const { user, car } = useContext(Context);
    const [probeg, setProbeg] = useState(props.car.probeg);

    const endRun = (probeg) => {
        endRent(user.rent, probeg).then((data) => {
            user.setRent(null);
            const carIndex = car.cars.findIndex((car) => car.id === data.carId);
            car.cars[carIndex].inRent = false;
        });
    };

    const deleteCar = (id) => {
        delCar(id).then((data) => {
            const carIndex = car.cars.findIndex((car) => car.id === data.id);
            car.cars.splice(carIndex,1);
        })
    }
    const onClick = props.active
        ? () => endRun(probeg)
        : () => props.buttonClick(props.car.id);

    return (
        <Col
            md={3}
            className={"mt-3"}
            /* onClick={() => history.push(CAR_ROUTE + '/' + props.car.id)} */
        >
            <Card
                style={{ width: 150, cursor: "pointer" }}
                className="p-3 w-100"
            >
                <div className="text-black-50 mt-1 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column align-items-left">
                        <div>Модель: {props.car.model}</div>
                        <div>Номер:{props.car.id}</div>
                        <div>Год выпуска: {props.car.year}</div>
                        <div>Пробег: {props.car.probeg}</div>
                        {props.car.inRent ? (
                            <div className="text-danger">Занята</div>
                        ) : (
                            <div className="text-success">Свободна</div>
                        )}
                    </div>
                    <div className="d-flex mt-1 flex-column  align-items-right justify-content-end">
                        {props.active ? (
                            <Form.Control
                                value={probeg}
                                onChange={(e) =>
                                    setProbeg(Number(e.target.value))
                                }
                                className="mt-3 mb-1"
                                placeholder="Введите пробег"
                                type="number"
                            />
                        ) : (
                            ""
                        )}
                        {user.isAuth ? (
                            <Button
                                onClick={onClick}
                                variant={"outline-dark"}
                                disabled={props.disable}
                            >
                                {props.button}
                            </Button>
                           
                        ) : (
                            ""
                        )}
                         {location.pathname === ADMIN_ROUTE ? (
                                <Button
                                    className="text-danger"
                                    variant={"outline-light"}
                                    onClick={() => deleteCar(props.car.id)}
                                >
                                    Удалить
                                </Button>
                            ) : (
                                ""
                            )}
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default CarItem;
