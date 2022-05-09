import styled from 'styled-components';

const CodeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const StyledCode = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.75rem;
  font-weight: 500;
  font-style: italic;
  color: ${(props) => props.theme.codeColor};
  display: grid;
  text-align: center;

  &.opening {
    justify-self: start;
  }

  &.closing {
    justify-self: end;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Code = ({ content, tag }) => {
  return (
    <CodeWrapper>
      <StyledCode className='opening'>&#60;{tag}&#62;</StyledCode>
      {content}
      <StyledCode className='closing'>&#60;/{tag}&#62;</StyledCode>
    </CodeWrapper>
  );
};

export default Code;
