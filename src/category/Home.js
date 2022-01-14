import classNames from "classnames";
import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Menu from "../Menu";
import styled from "styled-components";
import "../styles.css";

const homestyle = createGlobalStyle`
body {
  height: 100vh;
  background-image: url("../Media/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}`;

const Pave = styled.h1`
  margin-top: 50px;
  margin-left: 40px;
  font-size: 90px;
  font-weight: 900;
`;

class Home extends Component {
  /*
    constructor(props){
        super(props);
    }
    getReadContent(){

    }
    
   */
  render() {
    return (
      <div className="body">
        <Menu />
        <br />
        <Pave>Pave the way</Pave>
      </div>
    );
  }
}
export default Home;
