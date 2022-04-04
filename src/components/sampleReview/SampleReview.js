import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SampleReview = (props) => {
    const { name, review, rating, image } = props.review;
    return (
        <div className='card-container'>
            <div>

                <Card style={{ width: '100%' }}>
                    <Card.Img className='card-img' style={{ width: '100%' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <span className='fw-bolder'> Ratings: {rating}</span> <span className='text-warning'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bolder'>Review:</span>
                            {review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>);
};

export default SampleReview;