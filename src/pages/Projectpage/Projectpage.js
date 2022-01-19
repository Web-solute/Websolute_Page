import React from 'react';
import Scrollup from '../Scrollup';
import './styles.css'
import ProjectItem from './ProjectItem';

const Projectpage = () => {
  return (
    <section id="project" className="section">
      <br />
      <div className="div1">
        <div className="div2">
          <h1 className="project_main_text">
            Look Around Our Projects
          </h1>


        </div>

        <div className="div3">
          <ProjectItem />
        </div>

      </div>


      <Scrollup />
    </section>
  );
};

export default Projectpage;