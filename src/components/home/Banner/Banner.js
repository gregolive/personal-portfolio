import { useRef, useEffect } from 'react';
import { init } from 'ityped';
import StyledBanner, { Console } from './StyledBanner';
import Code from '../../code/Code';

const Banner = () => {
  const titleRef = useRef();
  useEffect(() => {
    init(titleRef.current, {
      showCursor: false,
      strings: ['Fullstack developer', 'OS Contributor', 'Designer'],
      typeSpeed:  100,
      backDelay: 2000,
      backSpeed: 60,
    });
  }, []);

  return (
    <StyledBanner className='banner'>
      <Code content={<h1>GREG OLIVE</h1>} tag='h1' />
      
      <Console>
        <span className='prompt'>C:\Users\guest&#62;&nbsp;</span>
        <span className='command' ref={titleRef}></span>
      </Console>
    </StyledBanner>
  );
};

export default Banner;
