import { Component } from "react";
import Menu from "./Menu";
import styled from "styled-components";
import "./styles.css";
import Footer from "./Footer";

const Pave = styled.p`
  font-size: 90px;
  margin: 0px;
  margin-bottom: 15px;
  font-weight: 900;
`;
const Sub = styled.h4`
  margin-top: 100px;
  margin-left: 40px;
  font-size: 30px;
`;
const Arrow = styled.a`
  text-decoration: none;
  color: black;

  margin-left: 40px;
  font-size: 23px;
  font-weight: 700;
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
      <>
        <div className="body">
          <Menu />
          <br />

          <Sub>
            <Pave>Pave the way</Pave>
            3H가 모이는 최고의 IT 서비스 개발 커뮤니티
            <br />
            <br />
          </Sub>
          <Arrow href="/about">웹솔루트 알아보기➔</Arrow>
        </div>
        <Footer />
      </>
    );
  }
}
export default Home;
