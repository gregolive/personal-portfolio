import { Code, AnimatedSection } from '../styled/Styled';
import SocialLinks from '../links/Links';

const Bio = () => {
  const bioText = `
    After starting my coding journey almost 10 years ago with an undergraduate class introducting C++, I have decided to make a bold career move into to web developement. 
    I am curious, a problem solver, and love working towards improving my skills in whatever I do.
    I was drawn to web development becuase it allows me to flex my creative muscles while creating something I am passionate about.
    I am open for new opportunities or people to share ideas with!
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
