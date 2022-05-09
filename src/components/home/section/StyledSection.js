import styled, { keyframes } from 'styled-components';

const StyledSection = styled.section`
  padding: 6rem 6rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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
    padding: 6rem 3rem 0 3rem;

    .section-description {
      padding: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 6rem 2rem 0 2rem;
  }

  @media screen and (max-width: 480px) {  
    padding: 6rem 1rem 0 1rem;
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

export { AnimatedSection };
