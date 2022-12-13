import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {Row,Col ,Form} from "react-bootstrap";

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
    const [minYear, setMinYear] = useState(null)
    const [maxProbeg, setMaxProbeg] = useState(null)

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

    useEffect(() => {
        console.log(maxProbeg);
        fetchCars({maxProbeg, minYear}).then((data) => {
            car.setCars(
                data.sort(function compareNumbers(a, b) {
                    return a.id - b.id;
                })
            );
            car.setTotalCount(data.length);
        });

       
    }, [maxProbeg,minYear]);

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
                <Form>
                    
                    <Form.Control
                        value={minYear}
                        onChange={e => setMinYear(e.target.value)}
                        className="mt-3"
                        placeholder="Минимальный год"
                        disabled={user.rent ? true : false}
                    />
                    <Form.Control
                        value={maxProbeg}
                        onChange={e => setMaxProbeg(e.target.value)}
                        className="mt-3"
                        placeholder="Максимальный пробег"
                        disabled={user.rent ? true : false}
        
                    />
                    </Form>
                </Col>
                <Col md={12}>
                    <CarList button="Взять" buttonClick={_startRent} />
                </Col>
            </Row>
            {/* <CreateCar show={user.rent ? true : false} onHide={() => user.setRent(null)}/> */}
        </Container>
    );
});

export default Shop;
