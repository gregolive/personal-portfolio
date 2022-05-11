import styled from 'styled-components';

const lightTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#fff',
  bgPrimaryColor: '#2924fb',
  bgSecondaryColor: '#fd23de',
  fontColor: '#0b132b',
  textShadowColor: '#2924fb',
  borderColor: '#e6ecf8',
  boxShadowColor: 'rgba(0,0,0,0.1)',
};

const darkTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#0b132b',
  bgPrimaryColor: '#030250',
  bgSecondaryColor: '#3617B6',
  fontColor: '#fff',
  shadowColor: '#fff',
  skillsBorderColor: 'rgba(255,255,255,0.5)',
  skillsShadowColor: 'rgba(255,255,255,0.75)',
};

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export { lightTheme, darkTheme, StyledApp };
