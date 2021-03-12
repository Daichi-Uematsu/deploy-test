import './Work.css';
import './Style.css';


import WorkPage from './components/WorkPage';
import { motion } from 'framer-motion';



const json = require('./test.json');



const containerVariants ={
  hidden:{
      opacity:0
  },

  visible:{
      opacity:1,
      transition:{
          delay:0.4,
          duration:0.8,
          when:"beforeChildren"
      }
  },
  exit:{
      opacity:0,
      transition:{
        delay:0.4,
        duration:0.8
      }
  }
}

function Work(props) {

  const id = props.location.state.id;
  const WorksArray = json[id-1];
  

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Work"
    >
    
    <WorkPage array={WorksArray}/>
    
    </motion.div>
  );
}

export default Work;
