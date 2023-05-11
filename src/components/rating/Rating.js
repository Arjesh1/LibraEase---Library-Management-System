import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
const maxRate = 5

const Rating = ({rate }) => {
  const hasDecimalValue = rate % 1;

  const fullRateStar = Math.floor(rate);
  const noRate =
    hasDecimalValue > 0 ? maxRate - fullRateStar - 1 : maxRate - fullRateStar;

  const fullStar = new Array(fullRateStar).fill("");
  const noRateStar = new Array(noRate).fill("");

  return (
    <div className="text-warning d-flex gap-1">
      {fullStar.map(() => (
        <BsStarFill />
      ))}
      {hasDecimalValue > 0 && <BsStarHalf />}
      {noRateStar.map(() => (
        <BsStar />
      ))}
    </div>
  )
}

export default Rating
