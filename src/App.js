import React from 'react';
import Home from'./Home';
import About from './About';
import Works from './Works';
import Work from './Work';
import Attention from './Attention';
import Contact from './Contact';
import { Route ,Switch, useLocation} from '../node_modules/react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { motion , AnimatePresence } from '../node_modules/framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  const location = useLocation();
  const rootPath = location.pathname.split("/");

  const current = window.location.pathname;
  const pageURLArr = current.split('/')[2]; 
  let pageURLArrCategory;
  let header;
  let footer;

  if(pageURLArr === ''){
    pageURLArrCategory = "HOME";
  }else{
    pageURLArrCategory = pageURLArr;
  };

  if(pageURLArrCategory === 'work'){
    header = <Header currentPath={pageURLArrCategory} theme ={"dark"}/>;
  }else{
    header = <Header currentPath={pageURLArrCategory} theme ={"right"}/>;
    footer = <Footer />;
  };

  

  console.log(pageURLArrCategory);






  return (
    <div>  	
      
      
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4}}
      >
        {header}
      </motion.div>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={rootPath}>
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/attention" component={Attention} />

          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>

      <ScrollToTop />
      {footer}
    </div>
  );
}

export default App;
