import React from 'react';
import { StyledQuote } from './Quote.styled';

const Quote = ({ quote }) => {
  return (
    <StyledQuote>
      <p>"{quote}"</p>
    </StyledQuote>
  );
};

export default Quote;
