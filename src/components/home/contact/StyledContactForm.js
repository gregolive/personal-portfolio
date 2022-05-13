import styled from 'styled-components';

const StyledContactForm = styled.form`
  width: 80%;
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  column-gap: 1rem;

  * {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.3rem;
  }

  *:not(:last-child):not(:nth-child(5)) {
    background: ${(props) => props.theme.inputColor};
    color: ${(props) => props.theme.fontColor};
    border: none;
    padding: 0.3rem 0.6rem;

    ::placeholder {
      color: ${(props) => props.theme.placeholderColor};
    }
  }

  button {
    margin-top: 0.5rem;
    justify-self: start;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;

    button {
      justify-self: stretch;
    }
  }
`;

export default StyledContactForm;

const StyledInput = styled.input`
  margin-bottom: 1rem;

  &:nth-child(3) {
    grid-column: 1 / -1;
  }
`;

const StyledTextarea = styled.textarea`
  grid-column: 1 / -1;
  resize: vertical;
  margin-bottom: 0.5rem;
`;

const ErrorMsg = styled.small`
  font-size: 0.85rem;
  color: #ff3860;
  background: none;
`;

export { StyledInput, StyledTextarea, ErrorMsg };
