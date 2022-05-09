import styled from 'styled-components';

const lightTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#fff',
  bgPrimaryColor: '#2924fb',
  bgSecondaryColor: '#fd23de',
  fontColor: '#0b132b',
  codeColor: '#C8C8D0',
  shadowColor: '#2924fb',
  skillsBorderColor: '#e6ecf8',
  skillsShadowColor: 'rgba(0,0,0,0.1)',
};

const darkTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#0b132b',
  bgPrimaryColor: '#030250',
  bgSecondaryColor: '#3617B6',
  fontColor: '#fff',
  codeColor: '#7C7C8D',
  shadowColor: '#fff',
  skillsBorderColor: 'rgba(255,255,255,0.5)',
  skillsShadowColor: 'rgba(255,255,255,0.75)',
};

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export { lightTheme, darkTheme, StyledApp };
