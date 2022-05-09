import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme, StyledApp } from './themes/themes';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header toggleTheme={toggleTheme} />
        <Home />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
