import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 49% 1% 49%;
  column-gap: 2rem;
`;
export const LineFragment = styled.div`
  justify-self: center;
  height: 100%;
  width: 0.4rem;
  background-color: #fff;
  border-radius: ${({ position }) =>
    position === 'first'
      ? '0.2rem 0.2rem 0 0'
      : position === 'last'
      ? '0 0 0.2rem 0.2rem'
      : '0'};
`;

export const EmptyBlock = styled.div`
  padding: 2rem;
  margin: 0 0;
`;
