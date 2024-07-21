import React, { useState } from 'react';

const RatingSection = ({ defaultRating, defaultPeople }) => {
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(defaultRating);

  const handleRatingSubmit = () => {
    const newTotalPeople = defaultPeople + 1;
    const newTotalRatings = ((defaultRating * defaultPeople + rating) / newTotalPeople).toFixed(2);
    setTotalRatings(newTotalRatings);
  };

  return (
    <div className="ratingSection">
      <h2>Rating</h2>
      <select value={rating} onChange={(e) => setRating(parseFloat(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p>Average Rating: {totalRatings}</p>
      <button onClick={handleRatingSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingSection;
