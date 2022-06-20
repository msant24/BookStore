import React from 'react'
import { useSelector } from 'react-redux'
const ListReviews = ({ reviews }) => {
    const{user, loading} =  useSelector(state => state.auth)
    return (
        <div class="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {reviews && reviews.map(review => (
                <div key={review._id} class="review-card my-3">
                    <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${(review.rating / 5) * 100}%` }}></div>
                    </div>
                    <p class="review_user">by {review.nickname}</p>
                    <p class="review_comment">{review.comment}</p>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ListReviews