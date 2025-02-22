import React from 'react';
import { StyledRandom } from './Random.styled';

const Random = ({ getQuote, isAuthor, getRandom }) => {
  return (
    <StyledRandom onClick={!isAuthor ? getQuote : getRandom}>
      <div className="random">Random</div>
      <svg
        width="16"
        height="22"
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5V8L12 4L8 0V3C3.58 3 0 6.58 0 11C0 12.57 0.46 14.03 1.24 15.26L2.7 13.8C2.23728 12.9395 1.99667 11.977 2 11C2 7.69 4.69 5 8 5ZM14.76 6.74L13.3 8.2C13.74 9.04 14 9.99 14 11C14 14.31 11.31 17 8 17V14L4 18L8 22V19C12.42 19 16 15.42 16 11C16 9.43 15.54 7.97 14.76 6.74V6.74Z"
          fill="black"
        />
      </svg>
    </StyledRandom>
  );
};

export default Random;
