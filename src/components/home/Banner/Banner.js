import StyledBanner, { Console } from './StyledBanner';
import Code from '../../code/Code';

const Banner = () => {
  return (
    <StyledBanner className='banner'>
      <Code content={<h1>GREG OLIVE</h1>} tag='h1' />
      
      <Console>
        <span className='prompt'>C:\Users\guest&#62;&nbsp;</span>
        <span className='command'>Fullstack developer</span>
      </Console>
    </StyledBanner>
  );
};

export default Banner;
