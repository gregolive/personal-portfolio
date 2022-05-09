import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme, GlobalStyles } from './themes/themes';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
