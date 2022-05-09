import { useState } from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <nav className='navbar'>
      <a href='/' className='navbar-title'>go</a>

      <label className='navbar-switch'>
        <input type='checkbox' onChange={toggleTheme} />
        <span className='slider' />
        <div className='switch-icon moon'>🌜</div>
        <div className='switch-icon sun'>🌞</div>
      </label>

      <button className='navbar-burger' onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' /></svg>
      </button>

      <div className={(menu) ? 'navbar-menu open' : 'navbar-menu close'}>
        <a href='#bio' className='navbar-item navbar-link'>Bio</a>
        <a href='#projects' className='navbar-item navbar-link'>Projects</a>
        <a href='#open-source' className='navbar-item navbar-link'>Open source</a>
      </div>
    </nav>
  );
};

export default Header;
