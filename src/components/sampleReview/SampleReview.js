import React from 'react';
import { Card } from 'react-bootstrap';

const SampleReview = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div className='card-container'>
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Img style={{ width: '100%' }} variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Ratings: {rating}
                        </Card.Text>
                        <Card.Text>
                            Review: {review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>);
};

export default SampleReview;