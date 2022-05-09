import styled from 'styled-components';

const StyledHeader = styled.nav`
  padding: 0.25rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  align-items: center;
  column-gap: 1.5rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 1;
  transition: background 0.2s ease;

  &.clear {
    background: transparent;
    border-bottom: none;
  }

  &.solid {
    background: ${(props) => props.theme.backgroundColor};
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
  }
`;

export default StyledHeader;

// Logo

const NavbarLogo = styled.a`
  color: ${(props) => props.theme.fontColor};
  font-family: 'Simplaform';
  font-size: 2.5rem;
  padding-top: 0.25rem;
  text-shadow: ${(props) => `${props.theme.secondaryColor} 1px -1px, ${props.theme.primaryColor} -2px 2px`};
  transition: text-shadow 0.18s ease-in-out;
  justify-self: start;

  &:hover {
    text-shadow: ${(props) => `${props.theme.primaryColor} 2px -1px, ${props.theme.secondaryColor} -3px 1px`};
  }
`;

// Theme swtich

const NavbarSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.9rem;
  height: 1.5rem;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  background: #192B61;
  border-radius: 0.75rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    content: "";
    background: white;
    border-radius: 50%;
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 1;
  }

  ${NavbarSwitch}:hover &:before{
    box-shadow: ${(props) => props.theme.shadowColor} 0 0 8px;
  }

  input:checked + & {
    background: ${(props) => props.theme.primaryColor};
  }
  
  input:checked + &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(calc(2.9rem - 1.5rem));
  }
`;

const SwitchIcon = styled.div`
  height: 1.5rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  &.moon {
    left: 0.15rem;
  }

  &.sun {
    right: 0.15rem;
  }
`;

// Burger

const NavbarBurger = styled.button`
  color: inherit;
  justify-self: end;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

// Menu

const NavbarMenu = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1.5rem;

  .navbar {
    color: ${(props) => props.theme.textColor};
  }

  .navbar-link {
    font-size: 1.2rem;
  }

  .navbar-link:hover {
    color: ${(props) => props.theme.shadowColor};
    text-shadow: ${(props) => props.theme.shadowColor} 0 0 15px;
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: auto;
    grid-column: 1 / -1;
    justify-self: center;
    overflow: hidden;
    width: 100%;
  
    &.open {
      max-height: 10rem;
      visibility: visible;
      transition: max-height 0.25s ease-in;
      padding-bottom: 0.5rem;
    }
    
    &.close {
      max-height: 0;
      visibility: hidden;
      transition: max-height 0.15s ease-out;
    }

    .navbar-link {
      grid-column: 1 / -1;
      text-align: center;
    }
  }
`;

export { NavbarLogo, NavbarSwitch, Slider, SwitchIcon, NavbarBurger, NavbarMenu };
