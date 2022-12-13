import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createCar, fetchCars} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const CreateCar = observer(({show, onHide}) => {
    const {car} = useContext(Context)
    const [model, setModel] = useState('')
    const [probeg, setProbeg] = useState(0)
    const [year, setYear] = useState(0)

        /* useEffect(() => {
            fetchTypes().then(data => car.setTypes(data))
            fetchBrands().then(data => car.setBrands(data))
        }, []) */


    const addCar = () => {
        const formData = {model,probeg,year}
        
        createCar(formData).then(data => {
            car.cars.push(data)
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить автомобиль
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    
                    <Form.Control
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        className="mt-3"
                        placeholder="Введите модель"
                    />
                    <Form.Control
                        value={probeg}
                        onChange={e => setProbeg(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите пробег"
                        type="number"
                    />
                    <Form.Control
                        value={year}
                        onChange={e => setYear(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите год выпуска"
                        type="number"
                    />
                
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCar}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCar;