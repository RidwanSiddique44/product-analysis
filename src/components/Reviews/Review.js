import React from 'react';
import useReview from '../hooks/useReview';
import Loadinfo from '../Loadinfo/Loadinfo';



const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        reviews.map(review => <Loadinfo review={review}></Loadinfo>)
    );
};

export default Review;