import { Code, AnimatedSection } from '../styled/Styled';
import SocialLinks from '../links/Links';

const Bio = () => {
  const bioText = `
    After starting my coding journey almost 10 years ago with an undergraduate class introducing C++, I have decided to make a bold career move into web development. 
    I am a problem solver, curious, and love working towards improving my skills in whatever I do.
    I was drawn to web development because it allows me to flex my creative muscles while creating something I am passionate about.
    I am open to new opportunities or people to share ideas with!
  `;

  return (
    <AnimatedSection id='bio' className='bio'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Hello world!</h2>} />
        <Code className='p' content={<p>{bioText}</p>} />
      </div>

      <SocialLinks />
    </AnimatedSection>
  );
};

export default Bio;
