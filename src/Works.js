import './Works.css';
import './Style.css';

import { motion } from '../node_modules/framer-motion';

import SnsVertical from './components/SnsVertical';
import PageTop from './components/PageTop';

import WorksPagenation from './components/WorksPagenation';


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

function Works(props) {

  return (

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Works"
    >
      
      <div className="mobile-hidden"><SnsVertical /></div>

      <PageTop 
          title="WORKS"
          text="展示作品一覧"
          current="WORKS"
      />

      <div className="works-wrapper">
        <WorksPagenation/>
      </div>

      <div className="mg-80"></div>

    </motion.div>
  );
}

export default Works;
