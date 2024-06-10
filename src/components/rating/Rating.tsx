import React from 'react'
import StarRatings from "react-star-ratings"

interface IStarRatingsProps {
  rating: number;
}

const Rating: React.FC<IStarRatingsProps> = ({rating}) => {
  return (
    <StarRatings 
      rating={rating}
      starRatedColor="#33A8F6"
      numberOfStars={10}
      starSpacing="3px"
      starDimension={'20px'}
    />
  )
}

export default Rating;