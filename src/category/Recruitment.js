import { Component } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Menu from "../Menu";
import recruit from "../Media/recruit.jpg";

const Recruit = styled.h1`
  margin-top: 80px;
  margin-left: 80px;
  font-size: 70px;
  font-weight: 900;
`;
const R_button = styled.button`
  margin-left: 170px;
  font-size: 23px;
  border-radius: 5px;
  color: white;
  padding: 15px;
  background-color: black;
`;

class Recruitment extends Component {
  /*
      constructor(props){
          super(props);
      }
      getReadContent(){
  
      }
      
     */
  render() {
    const astyle = {
      color: "white",
      textDecoration: "none",
    };
    return (
      <>
        <div className="recruitment">
          <Menu />
          <Recruit>
            WEBSOLUTE
            <br />
            RECRUITMENT
          </Recruit>
          <R_button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScBdxQ_8FQ7_EqOoJIgdCmry3WYfDSyggmtqx7ShYed9PVbNA/viewform"
              target="_blank"
              style={astyle}
            >
              지원서 작성하기
            </a>
          </R_button>
          <nav className="recruit_box">
            <h1>Qualification</h1>
            <ul>
              <li>d</li>
              <li>d</li>
            </ul>
          </nav>
          <nav className="recruit_box">
            <h1>Recruitment Schedule</h1>
            <ul>
              <li>d</li>
              <li>d</li>
            </ul>
          </nav>

          <nav className="recruit_box">
            <h1>Notice</h1>
            <ul>
              <li>d</li>
              <li>d</li>
            </ul>
          </nav>
        </div>
        <Footer />
      </>
    );
  }
}
export default Recruitment;
