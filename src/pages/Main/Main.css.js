import styled from 'styled-components';
import bg1 from '../../assets/bg1.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Splash = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  :after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000000aa;
    z-index: 1;
  }
`;

export const TitleWrap = styled.div`
  position: absolute;
  opacity: 0;
  left: -100rem;
  top: 50%;
  padding: 1rem 8rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 1rem 1rem 0;
  -webkit-animation: slide cubic-bezier(0.07, 0.65, 0.26, 0.91) 1s forwards;
  animation: slide cubic-bezier(0.07, 0.65, 0.26, 0.91) 1s forwards;
  z-index: 2;

  @-webkit-keyframes slide {
    100% {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes slide {
    100% {
      left: 0;
      opacity: 1;
    }
  }

  :before {
    content: 'Hello, my name is';
    position: absolute;
    top: -5rem;
    left: 10rem;
    color: #fff;
    font-family: HomemadeApple-Regular;
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  color: #918ef4;
  font-size: 7rem;
  font-family: FiraMono-Regular;
  margin: 0;
`;

export const Subtitle = styled.span`
  color: #fffcf8;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  font-family: FiraMono-Regular;
  margin: 1rem 0;
`;

export const Description = styled.div`
  position: absolute;
  opacity: 0;
  right: -20rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  color: #fffcf8;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  padding: 2rem 4rem 2rem 8rem;
  margin: 5rem 0 12rem 0;
  border-radius: 1rem 0 0 1rem;
  -webkit-animation: slideback cubic-bezier(0.07, 0.65, 0.26, 0.91) 1s forwards;
  animation: slideback cubic-bezier(0.07, 0.65, 0.26, 0.91) 1s forwards;
  animation-delay: 1s;
  z-index: 2;

  @-webkit-keyframes slideback {
    100% {
      right: 0;
      opacity: 1;
    }
  }

  @keyframes slideback {
    100% {
      right: 0;
      opacity: 1;
    }
  }
`;
export const Divider = styled.div`
  height: 0.7rem;
  width: 100%;
  background: linear-gradient(to right, #fff689, 80%, #ffac81);
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem;
  align-items: flex-start;
`;

export const SubtitleWrap = styled.div`
  width: max-content;
`;

export const SectionTitle = styled.h2`
  opacity: 0;
  overflow: hidden;
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  align-self: flex-start;
  color: #918ef4;
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  font-family: FiraMono-Regular;
  animation: 3s typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
  animation-fill-mode: both;

  @keyframes typing {
    from {
      opacity: 1;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #fff;
    }
  }
`;
