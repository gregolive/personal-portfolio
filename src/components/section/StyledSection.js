import styled, { keyframes } from 'styled-components';

const StyledSection = styled.section`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;

  &.bio {
    padding-bottom: 8rem !important;
  }

  &:before {
    content: '<section class="${props => props.id}">';
    font-family: 'Fira Code', monospace;
    font-size: 1.35rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.codeColor};
    opacity: 0.33;
    position: absolute;
    top: 1.5vw;
    left: 1.5vw;
  }

  &:after {
    content: "</section>";
    font-family: 'Fira Code', monospace;
    font-size: 1.35rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.codeColor};
    opacity: 0.33;
    position: absolute;
    bottom: 1.5vw;
    right: calc(1.5vw + 7px);
  }

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 2rem;
    margin: 0;
  }

  .section-description {
    padding: 0 10vw;
    text-align: center;
    display: grid;
  }

  @media screen and (max-width: 1024px) {
    padding: 4rem 3rem;

    .section-description {
      padding: 0;
    }

    &.bio&:after {
      bottom: calc(6rem + 1.5vw);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;

    &:before, &:after {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 480px) {  
    padding: 4rem 1rem;
  }
`;

export default StyledSection;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedSection = styled(StyledSection)`
  color: white;
  background: ${(props) => `linear-gradient(-45deg, ${props.theme.bgPrimaryColor}, ${props.theme.bgSecondaryColor}) no-repeat`};
  background-size: 400% 100%;
  animation: ${gradient} 15s ease infinite;
`;

export { AnimatedSection, gradient };
