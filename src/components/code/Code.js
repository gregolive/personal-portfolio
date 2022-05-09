import styled from 'styled-components';

const CodeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const StyledCode = styled.span`
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  font-style: italic;
  color: ${(props) => props.theme.codeColor};

  &.opening {
    justify-self: start;
  }

  &.closing {
    justify-self: end;
  }
`;

const Code = ({ content, tag }) => {
  return (
    <CodeWrapper>
      <StyledCode className={`${tag}-tag opening`}>&#60;{tag}&#62;</StyledCode>
      {content}
      <StyledCode className={`${tag}-tag closing`}>&#60;/{tag}&#62;</StyledCode>
    </CodeWrapper>
  );
};

export default Code;
