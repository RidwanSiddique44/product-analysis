import React from 'react';
import useReview from '../hooks/useReview';
import Loadinfo from '../Loadinfo/Loadinfo';
import './Review.css';



const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1>What our customer say !!</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Loadinfo key={review.id} review={review}></Loadinfo>)
                }
            </div>
        </div>


    );
};

export default Review;