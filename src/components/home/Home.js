import Banner from './banner/Banner';
import Bio from './Bio';
import Skills from './skills/Skills';
import PersonalProjects from './PersonalProjects';
import OpenSource from './OpenSource';
import TopBtn from './top-btn/TopBtn';

const Home = ({ scroll }) => {
  return (
    <>
      <Banner />
      <Bio />
      <Skills />
      <PersonalProjects />
      <OpenSource />
      <TopBtn scroll={scroll} />
    </>
  );
};

export default Home;
