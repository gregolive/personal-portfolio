import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  background: ${(props) => props.theme.primaryColor};
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 0.3rem;
  padding: 0.3rem 1.5rem;
  transition: all 0.4s ease;

  :hover {
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(255,255,255,0.9);
    letter-spacing: 1px;
  }
`;

export default StyledButton;
