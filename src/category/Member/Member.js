import { Component } from "react";
import Footer from "../../Footer";
import Menu from "../../Menu";
import styled from "styled-components";
import "./Member.css";
import Mem_list from "./member_list";

class Member extends Component {
  render() {
    const Member = styled.h1`
      font-size: 55px;
    `;

    return (
      <>
        <Menu />
        <div className="member">
          <Member>Our Member</Member>

          <Mem_list />
        </div>

        <Footer />
      </>
    );
  }
}
export default Member;
