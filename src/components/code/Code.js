import styled from 'styled-components';

const StyledCode = styled.span`
  position: relative;
  justify-self: center;

  &:before {
    content: '<${props => props.className}>';
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.fontColor};
    opacity: 0.12;
    position: absolute;
    top: -0.75rem;
    left: -2.25rem;
  }

  &:after {
    content: '</${props => props.className}>';
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.fontColor};
    opacity: 0.12;
    position: absolute;
    bottom: -0.75rem;
    right: -2.75rem;
  }

  &.h1&:before {
    font-size: 1.75rem;
    top: -2.25rem;
    left: 0;
  }

  &.h1&:after {
    font-size: 1.75rem;
    bottom: -2.25rem;
    right: 0;
  }

  &.h2&:before {
    top: -0.75rem;
    left: -2.75rem;
  }

  &.h2&:after {
    bottom: -0.75rem;
    right: -3.25rem;
  }

  @media screen and (max-width: 1024px) {
    &.p&:before {
      top: -1rem;
      left: -1.5rem;
    }
  
    &.p&:after {
      bottom: -1rem;
      right: -1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    &:before, &:after {
      font-size: 1rem;
    }

    &.h1&:before {
      font-size: 1.5rem;
      top: -1.75rem;
    }

    &.h1&:after {
      font-size: 1.5rem;
      bottom: -1.75rem;
    }
    
    &.h2&:before {
      top: -0.5rem;
      left: -2.5rem;
    }

    &.h2&:after {
      bottom: -0.5rem;
      right: -3rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.p&:before {
      left: -0.5rem;
    }
  
    &.p&:after {
      right: -0.5rem;
    }
  }
`;

const Code = ({ className, content  }) => {
  return (
    <StyledCode className={className}>
      {content}
    </StyledCode>
  );
};

export default Code;
