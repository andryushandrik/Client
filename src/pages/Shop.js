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
import {
    fetchBrands,
    fetchCars,
    fetchActiveRent,
    endRent,
    startRent,
} from "../http/carAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { car, user } = useContext(Context);

    const _startRent = async (carId) => {
        let data = await startRent(carId);
        if (data) {
            user.setRent(data.carId);
            const carIndex = car.cars.findIndex((car) => car.id === data.carId);
            car.cars[carIndex].inRent = true;
        }
    };

    useEffect(() => {
        fetchCars().then((data) => {
            car.setCars(
                data.sort(function compareNumbers(a, b) {
                    return a.id - b.id;
                })
            );
            car.setTotalCount(data.length);
        });

        fetchActiveRent().then((data) => {
            console.log(data[0]);
            if (data[0]) {
            user.setRent(data[0].carId); 
            }
        });
    }, [car, user.rent]);

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
                    <CarList button="Взять" buttonClick={_startRent} />
                </Col>
            </Row>
            {/* <CreateCar show={user.rent ? true : false} onHide={() => user.setRent(null)}/> */}
        </Container>
    );
});

export default Shop;
