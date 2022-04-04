import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../hooks/useReview';
import SampleReview from '../sampleReview/SampleReview';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (

        <div>
            <div>
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
            </div>
            <h2 className='fw-bolder'> Customer Reviews (3) </h2>
            <div className='review-container'>

                {
                    reviews.slice(0, 3).map(review => <SampleReview key={review.id} review={review} ></SampleReview>)
                }
            </div>
            <Button className='m-5 px-5 py-1' variant="primary"><Link to="/review" className='text-light fw-bolder'> See all Reviews</Link></Button>
        </div>

    );
};

export default Home;