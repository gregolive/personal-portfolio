import './Footer.css';
import StyledFooter, { FooterLogo } from './StyledFooter';
import SocialLinks from '../links/Links';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo>go</FooterLogo>
      <SocialLinks />
      <small>Built with care by &copy;gregolive</small>
    </StyledFooter>
  );
};

export default Footer;
