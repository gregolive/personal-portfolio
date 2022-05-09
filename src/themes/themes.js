import { createGlobalStyle } from 'styled-components';

const colorPrimary = '#2924fb';
const colorSecondary = '#fd23de';

const lightTheme = {
  background: '#fff',
  fontColor: '#0b132b',
};

const darkTheme = {
  background: '#0b132b',
  fontColor: '#fff',
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
  }
`;

export { lightTheme, darkTheme, GlobalStyles };
