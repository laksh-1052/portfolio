import styles from './ProjectsStyles.module.css';
import innovault from '../../assets/innovault.jpg';
import simon from '../../assets/simon.png';
import face from '../../assets/facial.jpg';
import chatbot from '../../assets/chatbot.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <h2 className='sectionTitle'>Curious?: Click any project to visit the GitHub repo!</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={innovault}
          link="https://github.com/laksh-1052/recent_innovault"
          h3="InnoVault"
          p="Assest Safeguard"
        
        />
        <ProjectCard
          src={simon}
          link="https://github.com/laksh-1052/simon-game"
          h3="Simon Game"
          p="Memory Challenger Game"
          
        />
        <ProjectCard
          src={face}
          link="https://github.com/laksh-1052/Facial_Expression_Classifier"
          h3="Emotion Identifier"
          p="Facial Expression Classifier"
          
        />
        {/* <ProjectCard
          src={chatbot}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Chat App"
          p="Real-Time Chat"
          
        /> */}
      </div>
    </section>
  );
}

export default Projects;
