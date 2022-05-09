import styled from 'styled-components';

const StyledBanner = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
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
  color: white;
  background: ${(props) => props.theme.primaryColor};
  font-size: 2rem;
  padding: 0.5rem 1.5rem;
  position: relative;

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 1.25rem solid ${(props) => props.theme.backgroundColor};
    border-bottom: 1.25rem solid transparent;
    border-right: 1.25rem solid ${(props) => props.theme.backgroundColor};
    position: absolute;
    top: -1.25rem;
    right: 0;
  }

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 1.25rem solid ${(props) => props.theme.backgroundColor};
    border-top: 1.25rem solid transparent;
    border-left: 1.25rem solid ${(props) => props.theme.backgroundColor};
    position: absolute;
    bottom: -1.25rem;
    left: 0;
  }

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
    padding: 0.75rem 1rem;

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

    &:after {
      border-top: 1rem solid ${(props) => props.theme.backgroundColor};
    }
  
    &:before {
      border-bottom: 1rem solid ${(props) => props.theme.backgroundColor};
    }

    .prompt {
      font-size: 1rem;
      letter-spacing: -2px;
    }
  
    .command {
      font-size: 1.25rem;
    }
  }
`;

export { Console };
