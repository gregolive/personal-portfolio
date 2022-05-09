import styled from 'styled-components';

const lightTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  background: '#fff',
  fontColor: '#0b132b',
  shadowColor: '#2924fb',
};

const darkTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  background: '#0b132b',
  fontColor: '#fff',
  shadowColor: '#fff',
};

const StyledApp = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

export { lightTheme, darkTheme, StyledApp };
