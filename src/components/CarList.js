import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import CarItem from "./CarItem";

const CarList = observer((props) => {
    const { user, car } = useContext(Context);
    const[userrent, setUserrent] = useState(user.rent);
    useEffect(() => {
      setUserrent(user.rent);
    }, [user.rent, car])
    
    return (
        <Row className="d-flex">
            {car.cars.map((car) => (
                <CarItem
                    key={car.id}
                    active={car.id == userrent ? true : false}
                    disable={userrent && car.id !== userrent ? true : false}
                    car={car}
                    button={car.id == userrent ? "Закончить" : props.button}
                    buttonClick={props.buttonClick}
                    
                />
            ))}
        </Row>
    );
});

export default CarList;
