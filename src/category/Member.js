import { Component } from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import styled from "styled-components";
import "./Member.css";
import MemberList from "./MemberList";

class Member extends Component {
  /*
      constructor(props){
          super(props);
      }
      getReadContent(){
  
      }
      
     */


  render() {

    const Member = styled.h1`
      font-size: 55px;
    `;

    return (
      <>
        <Menu />
        <div className="member">
          <Member>Our Member</Member>

          <MemberList />

        </div>
        <Footer />
      </>
    );
  }
}
export default Member;
