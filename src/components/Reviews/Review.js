import React from 'react';
import useReview from '../hooks/useReview';
import Loadinfo from '../Loadinfo/Loadinfo';
import './Review.css';



const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review-container'>
            {
                reviews.map(review => <Loadinfo key={review.id} review={review}></Loadinfo>)
            }
        </div>

    );
};

export default Review;