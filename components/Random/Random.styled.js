import styled from 'styled-components';

export const StyledRandom = styled.div`
  position: absolute;
  top: 32px;
  right: 100px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  .random {
    font-size: 18px;
    color: #333;
    margin-right: 8px;
  }
  svg {
    path {
      fill: #333;
    }
  }
`;
