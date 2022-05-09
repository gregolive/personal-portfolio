import './Home.css';
import Banner from './Banner/Banner';
import Bio from './Bio';
import Skills from './Skills';
import PersonalProjects from './PersonalProjects';
import OpenSource from './OpenSource';

const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <Bio />
        <Skills />
        <PersonalProjects />
        <OpenSource />
      </main>
    </>
  );
};

export default Home;
