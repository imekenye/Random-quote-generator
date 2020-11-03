import styled from 'styled-components';

export const StyledAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 672px;
  height: 151px;
  padding: 50px 30px;
  margin-top: 110px;
  transition: 0.5s ease-in-out;
  &:hover {
    background: #333333;
    cursor: pointer;
    .author {
      color: white;
    }
    svg {
      path {
        fill: white;
      }
    }
  }
  .author {
    font-weight: 700;
    font-size: 24px;
    color: #4f4f4f;
  }
  .genre {
    font-weight: 500;
    font-size: 14px;
    color: #828282;
  }
`;
