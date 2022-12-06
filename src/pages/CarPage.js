import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneCar, startRent } from "../http/carAPI";

const CarPage = () => {
    const [car, setCar] = useState({info: []});
    const { id } = useParams();
    useEffect(() => {
        console.log();
        fetchOneCar(id).then((data) => setCar(data));
        
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <div>Модель: {car.model}</div>
                <div>Номер:{car.id}</div>
                <div>Год выпуска: {car.year}</div>
                <div>Пробег: {car.probeg}</div>
                {car.inRent ? (
                    <div className="text-danger">Занята</div>
                ) : (
                    <div className="text-success">Свободна</div>
                )}
            </Row>
            <Row className="d-flex flex-column m-3">
            
            <Button onClick={startRent(car.id)} > Взять </Button>
            </Row>
        </Container>
    );
};

export default CarPage;
