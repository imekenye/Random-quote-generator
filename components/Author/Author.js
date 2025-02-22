import React from 'react';
import { StyledAuthor } from './Author.styled';
import Link from 'next/link';

const Author = ({ author, genre }) => {
  return (
    <StyledAuthor>
      <div>
        <Link href={`/author/${author}`}>
          <a className="author">{author}</a>
        </Link>

        <div className="genre">{genre}</div>
      </div>

      <svg
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="black" />
      </svg>
    </StyledAuthor>
  );
};

export default Author;
