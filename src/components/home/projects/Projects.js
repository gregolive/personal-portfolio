import styled from 'styled-components';
import ImgCarousel from '../img-carousel/ImgCarousel';

const ProjectGrid = styled.div`

`;

const StyledProject = styled.div`

`;

const Projects = ({ projects }) => {
  return (
    <ProjectGrid>
      {projects.map((project, i) =>
        <StyledProject key={i}>
          <ImgCarousel images={project.images} color={project.color} />
        </StyledProject>
      )}
    </ProjectGrid>
  );
};

export default Projects;
