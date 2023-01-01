import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import {light} from './styles/Themes'


import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import RoadMap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Fqa from './components/sections/Faq';
import Footer from './components/sections/Footer';



function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
	<Navigation />
	<Home />
	<About />
	<Roadmap />
	<Showcase />
	<Team />
	<Faq />
	<Footer />
	</ThemeProvider>
    </>
  );
}

export default App;
