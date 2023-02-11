import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  min-height: 10rem;
  transition: 3s;
  width: 100%;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-end' : 'flex-start'};
  padding-top: ${({ long }) => long === true && '5rem'};
  cursor: pointer;
  animation-fill-mode: both;

  :last-of-type {
    margin-bottom: 3rem;
  }

  :hover {
    animation: bounceSideways 1s;

    @keyframes bounceSideways {
      0% {
        transform: translateX(0);
      }
      30% {
        transform: translateX(-1rem);
      }
      50% {
        transform: translateX(0);
      }
      70% {
        transform: translateX(-0.5rem);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

export const CardWrapper = styled.div`
  min-height: 5rem;
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 0.4rem solid #fff;
  border-radius: 1rem;
  padding: 2rem;
  color: #fff;

  ${props =>
    props.toggled === true
      ? css`
          animation: toggle 2s;
        `
      : css`
          animation: toggleOff 2s;
        `};

  @keyframes toggle {
    from {
      max-height: 0;
    }
    to {
      max-height: 1000px;
    }
  }

  @keyframes toggleOff {
    from {
      max-height: 1000px;
    }
    to {
      max-height: 0;
    }
  }
  animation-fill-mode: both;
`;

export const Line = styled.div`
  align-self: center;
  top: 4rem;
  width: 3.5rem;
  height: 0.2rem;
  background-color: #fff;
  flex-shrink: 0;
`;

export const EventName = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const EventDetails = styled.span`
  font-style: italic;
  font-size: 1.25rem;

  svg {
    height: 0.4rem;
    margin: 0 1rem;
  }
`;

export const EventMoreInfo = styled.div`
  align-self: flex-start;
  margin-top: 1rem;
  max-width: 300px;
  animation: ${props =>
    props.toggled === true
      ? css`
      toggleText 2s 
    `
      : css`
      toggleTextOff 2s 
    `};

  @keyframes toggleText {
    from {
      opacity: 0;
      max-width: 300px;
    }
    to {
      opacity: 1;
      max-width: 1000px;
    }
  }

  @keyframes toggleTextOff {
    from {
      opacity: 1;
      max-width: 1000px;
    }
    to {
      opacity: 0;
      max-width: 300px;
    }
  }
  animation-fill-mode: both;
`;

export const IconWrap = styled.div`
  flex-shrink: 0;
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  margin: 2rem 0;
  color: #fff;
  background: #6460ef;
  background: linear-gradient(45deg, #6460ef 0%, #ff9b68 100%);

  svg {
    font-size: 1.6rem;
  }
`;
