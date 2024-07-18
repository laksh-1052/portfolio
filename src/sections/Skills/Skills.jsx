import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/skillList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <br/>
      <div className={styles.skillList}>
        <h3>Programming Languages</h3>
        <SkillList src={checkMarkIcon} skill="JAVA" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <h3>Web Development</h3>
        <SkillList src={checkMarkIcon} skill="MERN Stack" />
        <SkillList src={checkMarkIcon} skill="My SQL" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Spring Boot" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
       <h3>Machine Learning</h3>
       <br/>
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
        <SkillList src={checkMarkIcon} skill="Data Visualization" />
        <SkillList src={checkMarkIcon} skill="Data Preprocessing" />
      </div>
      <hr/>
      <div className={styles.skillList}>
       <h3>Miscellaneous</h3>
       <br/>
        <SkillList src={checkMarkIcon} skill="Linux (Ubuntu)" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Postman" />
      </div>
    </section>
  );
}

export default Skills;
