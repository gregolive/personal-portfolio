import StyledSkills, { StyledSkillCol } from './StyledSkills';

const SkillCol = ({ svg, title, skills }) => {
  return (
    <StyledSkillCol>
      {svg}
      <h3>{title}</h3>
      <ul>
        {skills.map((skill) => <li>{skill}</li>)}
      </ul>
    </StyledSkillCol>
  );
};

const Skills = () => {
  return (
    <StyledSkills>
      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z' /></svg>}
        title='Languages I Speak'
        skills={['HTML', 'CSS', 'Javascript', 'Ruby', 'SQL']}
      />

      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M21 16V13C21 11.89 20.11 11 19 11H13V8H15V2H9V8H11V11H5C3.89 11 3 11.89 3 13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21M11 4H13V6H11V4M5 20H3V18H5V20M13 20H11V18H13V20M21 20H19V18H21V20Z' /></svg>}
        title='My Frameworks'
        skills={['Bootstrap', 'Bulma', 'Ruby on Rails']}
      />

      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M21 16V13C21 11.89 20.11 11 19 11H13V8H15V2H9V8H11V11H5C3.89 11 3 11.89 3 13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21M11 4H13V6H11V4M5 20H3V18H5V20M13 20H11V18H13V20M21 20H19V18H21V20Z' /></svg>}
        title='My Dev Tools'
        skills={['Codepen', 'Heroku', 'Github', 'Replit', 'Terminal', 'Virtual Studio Code', 'Webpack']}
      />
    </StyledSkills>
  );
};

export default Skills;
