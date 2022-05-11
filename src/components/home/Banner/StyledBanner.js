import styled from 'styled-components';

const StyledBanner = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  
  h1 {
    font-size: 5rem;
    font-weight: 900;
    font-style: italic;
    line-height: 4rem;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 4rem;
      line-height: 3.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 3.3rem;
      line-height: 2.5rem;
    }
  }
`;

export default StyledBanner;

const Console = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 2rem;
  color: ${(props) => props.theme.backgroundColor};
  background: ${(props) => props.theme.fontColor};
  box-shadow: ${(props) => `${props.theme.secondaryColor} 2px -2px, ${props.theme.primaryColor} -3px 3px`};
  padding: 0.5rem 1.5rem;
  position: relative;

  .prompt {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .command {
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.75rem 1.25rem;

    .prompt {
      font-size: 1.1rem;
      letter-spacing: -1px;
    }
  
    .command {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.7rem;

    .prompt {
      font-size: 0.9rem;
    }
  
    .command {
      font-size: 1.25rem;
    }
  }
`;

export { Console };
