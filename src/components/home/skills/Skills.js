import StyledSkills, { StyledSkillCol, SkillsGrid } from './StyledSkills';
import { languages, frameworks, tools } from '../../../assets/helpers/skills';

const SkillCol = ({ svg, title, skills }) => {
  return (
    <StyledSkillCol>
      {svg}
      <h3>{title}</h3>

      <SkillsGrid>
        {skills.map((skill, i) => 
          <li key={i}>
            {skill.icon}
            {skill.text}
          </li>
        )}
      </SkillsGrid>
    </StyledSkillCol>
  );
};

const Skills = () => {
  return (
    <StyledSkills>
      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z' /></svg>}
        title='Languages I Speak'
        skills={languages}
      />

      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M21 16V13C21 11.89 20.11 11 19 11H13V8H15V2H9V8H11V11H5C3.89 11 3 11.89 3 13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21M11 4H13V6H11V4M5 20H3V18H5V20M13 20H11V18H13V20M21 20H19V18H21V20Z' /></svg>}
        title='My Frameworks'
        skills={frameworks}
      />

      <SkillCol 
        svg={<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'><path d='M20,18V14H17V15H15V14H9V15H7V14H4V18H20M6.33,8L4.59,12H7V11H9V12H15V11H17V12H19.41L17.67,8H6.33M9,5V6H15V5H9M21.84,12.61C21.94,12.83 22,13.09 22,13.41V18C22,18.53 21.79,19 21.4,19.41C21,19.81 20.55,20 20,20H4C3.45,20 3,19.81 2.6,19.41C2.21,19 2,18.53 2,18V13.41C2,13.09 2.06,12.83 2.16,12.61L4.5,7.22C4.84,6.41 5.45,6 6.33,6H7V5C7,4.45 7.18,4 7.57,3.59C7.96,3.2 8.44,3 9,3H15C15.56,3 16.04,3.2 16.43,3.59C16.82,4 17,4.45 17,5V6H17.67C18.55,6 19.16,6.41 19.5,7.22L21.84,12.61Z' /></svg>}
        title='My Dev Tools'
        skills={tools}
      />
    </StyledSkills>
  );
};

export default Skills;
