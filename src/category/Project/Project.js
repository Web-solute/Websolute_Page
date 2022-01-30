import { Component } from "react";
import Footer from "../../Footer";
import Menu from "../../Menu";
import Project1 from "../../pages/Projectpage";
import styled from "styled-components";
import "./Project.css";

class Project extends Component {
  /*
      constructor(props){
          super(props);
      }
      getReadContent(){
  
      }
      
     */
  render() {
    const Pro = styled.h1`
      font-size: 55px;
    `;
    return (
      <>
        <Menu />
        <div className="proo">
          <Pro>Look Around Our Projects</Pro>
        </div>
        <Project1 />
        <Footer />
      </>
    );
  }
}
export default Project;
