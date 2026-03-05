import React, { useEffect, useState } from 'react';
import ReviewCard from '../../../components/reviewCard/ReviewCard';

const SwipperReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/reviews.json').then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch data from reviews");
            }
            return res.json();
        }).then(data => {
            setReviews(data);


        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });

    }, [])
    if (loading) {
        return <p>Loading...</p>
    }
    console.log(reviews)
    return (
        <div>
            <ReviewCard reviews={reviews}></ReviewCard>
        </div>
    );
};

export default SwipperReview;