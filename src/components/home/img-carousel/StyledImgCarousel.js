import styled, { keyframes } from 'styled-components';

const StyledCarousel = styled.div`
  position: relative;

  button {
    color: black;
    opacity: 0.33;
    padding: 0;
    position: absolute;
    top: 50%;
    transition: 0.25s;
  }

  button:hover {
    color: ${(props) => props.color};
    opacity: 1;
  }

  button:first-of-type {
    left: 0;
  }

  button:last-of-type {
    right: 0;
  }

  button svg {
    height: 3rem;
    width: auto;
  }
`;

export default StyledCarousel;

const CarouselContainer = styled.div`
  justify-self: center;
`;

const fade = keyframes`
  from {
    opacity: .4
  } 
  to {
    opacity: 1
  }
`;

const ImgSlide = styled.div`
  display: none;
  animation-name: ${fade};
  animation-duration: 1.5s;

  &.active {
    display: block;
  }

  img {
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px ${(props) => props.theme.boxShadowColor};
    height: 30rem;
    aspect-ratio: 0.685;
  }
`;

const NavDots = styled.div`
margin-top: 0.25rem;
  height: var(--dot-div-height);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const Dot = styled.span`
  background: ${(props) => props.theme.boxShadowColor};
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
  cursor: pointer;
  transition: 0.4s;

  &.active, &:hover {
    background: ${(props) => props.color};
  }
`;

export { CarouselContainer, ImgSlide, NavDots, Dot };
