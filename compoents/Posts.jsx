import Recat from "react";
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";

import { Container, Row, Col, Card } from 'react-bootstrap';

const Posts = () => {
    return (
        <Container>
            <Row className="Justify-content-between">
                <Col md={8} className="mb-4 mt-4">
                    <Post1 />
                </Col>
                <Col md={2} className="mt-4 float-right">
                    <card>
                        <Card.Body>
                            <Card.Title>Recent Posts</Card.Title>
                            <ul className="list-unstyled">
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Data Sturcture</a></li>
                                <li><a href="#">Algorithm</a></li>
                                <li><a href="#">Computer Networks</a></li>
                            </ul>
                        </Card.Body>
                    </card>
                </Col>
                <Col md={8} className="mb-4">
                    <Post2 /></Col>
                <Col md={8} className="mb-4">
                    <Post3 /></Col>
                <Col md={8} className="mb-4">
                    <Post4 /></Col>
            </Row>
        </Container>
    );
};
export default Posts;