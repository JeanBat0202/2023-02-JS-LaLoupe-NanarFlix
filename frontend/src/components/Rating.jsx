import { useState } from "react";
import PropTypes from "prop-types";
import turnipColor from "../assets/icons/turnip-color.svg";
import turnipNoColor from "../assets/icons/turnip-nocolor.svg";

export default function Rating({ id }) {
  const setRating = useState(0)[1];

  const handleRatingClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    localStorage.setItem(`ratingLocalStorage${id}`, newRating);
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          className="w-10 flex-shrink-0"
          // eslint-disable-next-line react/no-array-index-key
          key={`img-${index}`}
          src={
            index <
            parseInt(localStorage.getItem(`ratingLocalStorage${id}`), 10)
              ? turnipColor
              : turnipNoColor
          }
          alt="Rating icon"
          onClick={() => handleRatingClick(index)}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  id: PropTypes.number,
};

Rating.defaultProps = { id: 0 };
