import styled from 'styled-components';

const StyledSkills = styled.article`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.skillsBorderColor};
  border-radius: 0.8rem;
  box-shadow: 1px 1px 5px ${(props) => props.theme.skillsShadowColor};
  margin: -6rem 16vw 0 16vw;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    margin: -6rem 8vw 0 8vw;
    padding: 1.5rem;
    column-gap: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    margin: -6rem 15vw 0 15vw;
    padding: 2rem;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    margin: -6rem 5vw 0 5vw;
    padding: 1.5rem;
  }
`;

export default StyledSkills;

const StyledSkillCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: ${(props) => props.theme.primaryColor};
    height: 3rem;
  }
`;

export { StyledSkillCol };
