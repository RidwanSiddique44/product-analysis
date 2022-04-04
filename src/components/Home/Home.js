import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (

        <Container className='m-5'>
            <Row>
                <Col sm={8}>
                    <div className='text-start'>
                        <h1 className='fw-bolder'>Top rated watch of:2022</h1>
                        <h1 className='fw-bolder text-primary'>Buy your best desired watch</h1>
                        <p>Think it's time to upgrade your traditional watch by adding some apps and notifications to your wrist? If you're after the best smartwatch there's no shortage of choice, but finding the best option for you isn't necessarily easy, as there are loads of great wearables available, and the best for some people won't necessarily be the top fit for your wrist.</p>
                        <button className='explore-btn'>Explore more</button>
                    </div>
                </Col>
                <Col sm={4}>
                    <img src={require('./watch.png')} alt="" />
                </Col>
            </Row>

        </Container>

    );
};

export default Home;