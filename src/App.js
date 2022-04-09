import logo from './logo.svg';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Theme';
import { Route, Switch, useLocation } from 'react-router-dom';
import Main from './pages/MainPage';
import Blog from './pages/BlogPage';
import About from './pages/AboutPage';
import Skill from './pages/SkillPage';
import Work from './pages/WorkPage';
import { AnimatePresence } from 'framer-motion'
import SoundBar from './components/SoundBar';
function App() {

  const location = useLocation();

  

    return (
    <>

      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname} >
            <Route exact path='/' component={Main} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skill' component={Skill} />
            <Route exact path='/work' component={Work} />
          </Switch>
        </AnimatePresence>



      </ThemeProvider>
    </>
    );
}

    export default App;
