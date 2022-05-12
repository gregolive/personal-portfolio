import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

export default ProjectGrid;

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5vw;

  .project-overview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    .project-overview {
      grid-row: 1 / 2;
    }
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Fira Code', monospace;
  color: ${(props) => props.color};
  font-size: 1.65rem;
  margin: 0;
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectLinks = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  gap: 0.25rem;

  svg {
    transition: 0.25s ease-in-out;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;

const ProjectTags = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 300;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    color: ${(props) => props.color};
    background: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.color};
    border-radius: 1rem;
    padding: 0.1rem 0.8rem;
    text-align: center;
    cursor: default;
    transition: 0.4s;
  }

  span:hover {
    color: ${(props) => props.theme.backgroundColor};
    background: ${(props) => props.color};
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export { StyledProject, ProjectTitle, ProjectLinks, ProjectTags };
