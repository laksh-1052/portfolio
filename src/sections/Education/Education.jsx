import styles from './EducationStyles.module.css';
import puzzle from '../../assets/puzzle.png'


function Education() {
// const grad = {
//     height : '40px',
//     width : '40px',
//     display : 'flex',
// }
const paraStyle = {
    display : 'flex',
    'justify-content': 'space-evenly',
    // 'align-self': 'center',
    // 'flex-wrap': 'wrap',
    'margin-left':'20px',
    'align-items': 'flex-start',
      gap: '5px',
      'text-align':'left'
  }
  const divsty = {
    display: 'flex',
    'flex-direction':'row',
    'align-items':'flex-start',
    'margin-left':'100px',
    'margin-right':'100px',
    'justify-content': 'left'
  }
  
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>Education</h1>
        <div className={styles.edContainer}  >
       
        <p style={paraStyle}> <img src={puzzle} alt='grad cap'/>Class 10 
        <br/>
        -High School:
        <br/>
        Sri Vani Education Centre, Bangalore -CBSE
        <br/>
        May 2018
        <br/>
        <br/>
        91.3%
        </p>
         <br/>
        <p style={paraStyle}> <img src={puzzle} alt='grad cap'/>Class 12 
        <br/>
        -PU College:
        <br/>
        KMWA PU College, Bangalore -Karnataka Board
        <br/>
        June 2018 - March 2020
        <br/>
        <br/>
        83.5%
        </p>
        
         <br />
        <p style={paraStyle}> <img  src={puzzle} alt='grad cap'/>Bachelor's Degree (B.E):
        <br/>
        Global Academy Of Technology, Bangalore -CSE
        <br/>
        June 2020 - July2024
        <br/>
        <br/>
        9.07 CGPA
        </p>
        
        
         
        </div>
    </section>
  )
}

export default Education