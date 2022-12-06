import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateCar from "../components/modals/CreateCar";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import CarList from "../components/CarList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchCars, fetchTypes } from "../http/carAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { car,user } = useContext(Context);

    useEffect(() => {
        fetchCars().then((data) => {
            /* console.log("cars");
            console.log(data);
            console.log(data.length); */
            car.setCars(data);
            car.setTotalCount(data.length);
        });
    }, []);

    /*  useEffect(() => {
        fetchCars(car.selectedType.id, car.selectedBrand.id, car.page, 2).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    }, [car.page, car.selectedType, car.selectedBrand,]) */

    return (
        <Container>
            <Row className="mt-2">
                <Col md={12}>
                    <CarList button="Взять"/>
                </Col>
            </Row>
        <CreateCar show={user.rent ? true : false} onHide={() => user.setRent(null)}/>
        </Container>
    );
});

export default Shop;
