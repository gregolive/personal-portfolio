import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme, StyledApp } from './themes/themes';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [scroll, setScroll] = useState(0);

  const toggleTheme = () => (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);

  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header toggleTheme={toggleTheme} scroll={scroll} />
        <Home />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
