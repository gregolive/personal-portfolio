import styled from 'styled-components';

const StyledContactForm = styled.form`
  width: 80%;
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  gap: 1rem;

  * {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.3rem;
  }

  *:not(:last-child) {
    background: ${(props) => props.theme.inputColor};
    color: ${(props) => props.theme.fontColor};
    border: none;
    padding: 0.3rem 0.6rem;

    ::placeholder {
      color: ${(props) => props.theme.placeholderColor};
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export default StyledContactForm;

const StyledInput = styled.input`
  &:nth-child(3) {
    grid-column: 1 / -1;
  }
`;

const StyledTextarea = styled.textarea`
  grid-column: 1 / -1;
  resize: vertical;
`;

const SubmitButton = styled.button`
  font-weight: 500;
  background: ${(props) => props.theme.primaryColor};
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.4);
  width: 6rem;
  padding: 0.3rem 0;
  justify-self: start;
  transition: all 0.4s ease;

  :hover {
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(255,255,255,0.9);
    letter-spacing: 1px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    justify-self: stretch;
  }
`;

export { StyledInput, StyledTextarea, SubmitButton };
