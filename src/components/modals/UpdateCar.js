import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {updateCar, fetchOneCar} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const UpdateCar = observer(({id, show, onHide}) => {
    const [model, setModel] = useState('')
    const [probeg, setProbeg] = useState(0)
    const [year, setYear] = useState(0)
    console.log(id);
    useEffect(() => {
        if(id){
        fetchOneCar(id).then((data) => {
            const {model,probeg,year} = data;
            
            setModel(model);
            setProbeg(probeg);
            setYear(year);
        });
    }
    }, [id]);
        /* useEffect(() => {
            fetchTypes().then(data => car.setTypes(data))
            fetchBrands().then(data => car.setBrands(data))
        }, []) */


    const upCar = () => {
        const formData = {model,probeg,year}
        
        updateCar(id, formData).then(data => onHide())
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактировать автомобиль id: {id}
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
                <Button variant="outline-success" onClick={upCar}>Сохранить изменения</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default UpdateCar;