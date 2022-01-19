import { Component } from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import Project1 from "../pages/Projectpage";

class Project extends Component {
  /*
      constructor(props){
          super(props);
      }
      getReadContent(){
  
      }
      
     */
  render() {
    return (
      <>
        <Menu />
        <Project1 />
        <Footer />
      </>
    );
  }
}
export default Project;
