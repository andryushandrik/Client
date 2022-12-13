import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { fetchMyRent } from "../http/carAPI";

const MyRuns = () => {
    const [runs, setRuns] = useState([]);
    useEffect(() => {
        fetchMyRent().then((data) => {
            console.log(data);
            setRuns(
                data.sort(function compareNumbers(a, b) {
                    return a.id - b.id;
                })
            );
        });
    }, []);

    return (
        <Container className="mt-3">
            <Row className="flex-column">
                {runs.map((run) => (
                    <Container>
                        <Row>
                            {Object.keys(run).map((prop) => (
                                <Col className="flex-grow-1">
                                <p>
                                    {prop} : <br />
                                    {run[prop]}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                ))}
            </Row>
        </Container>
    );
};

export default MyRuns;
