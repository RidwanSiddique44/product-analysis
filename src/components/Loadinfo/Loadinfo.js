import React from 'react';
import { Card } from 'react-bootstrap';

const Loadinfo = (props) => {
    const { name, review } = props.review;
    return (
        <Card className="text-center m-5 border border-primary">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {review}
                </Card.Text>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Loadinfo;