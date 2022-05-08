import { personalProjects } from '../../assets/helpers/projects';

const PersonalProjects = () => {
  return (
    <section id='projects' className='main-section projects'>
      <div className='section-description'>
        <h2>Recent projects</h2>

        <p>Here are some of my personal projects.</p>
      </div>

      <div className='project-grid'>
        {personalProjects.map((project, index) =>
          <figure key={index}>
            <img src={project.img} alt={project.title} />
            <figcaption>
              <div className='project-description'>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <a href={project.link} target='_blank' rel='noreferrer'>
                <span>Visit website</span>
                <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>
              </a>
            </figcaption>
            <div className='cover'></div>
          </figure>
        )}
      </div>
    </section>
  );
};

export default PersonalProjects;
