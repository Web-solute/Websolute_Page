import { Component } from "react";
import styled from "styled-components";
import Footer from "../../Footer";
import Menu from "../../Menu";
import "../../styles.css";

import "./Recruitment.css";
const Recruit = styled.h1`
  margin-top: 110px;
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
        </div>
        <nav className="recruit_box">
          <h1>Qualification</h1>
          <ul>
            <li>개발하고 싶은 아이디어가 많으신 분</li>
            <li>
              대학생 중 협업을 활동을 통해 서비스를 창작하고 배포해보고 싶으신
              분{" "}
            </li>
            <li>다양한 분야의 사람들과 소통하길 원하시는 분 </li>
            <li>매주 진행되는 온라인 회의 참여가능하신 분 </li>
          </ul>
        </nav>
        <nav className="schedule_box">
          <h1 style={{ fontSize: "35px" }}>Recruitment Schedule</h1>
          <ul>
            <li>
              <h3>서류접수</h3> <p>2021. 12. 4 ~ 12. 12</p>
            </li>
            <li>
              <h3>서류 합격 발표</h3> <p>2021. 12. 4</p>
            </li>
            <li>
              <h3>면접</h3> <p>2021. 12. 4 ~ 12. 12</p>
            </li>
            <li>
              <h3>최종 합격 발표</h3> <p>2021. 12. 4</p>
            </li>
            <li>
              <h3>정규 활동</h3> <p>2021. 12. 4 ~ 12. 12</p>
            </li>
          </ul>
        </nav>

        <nav className="recruit_box" style={{ marginTop: "200px" }}>
          <h1>Notice</h1>
          <ul>
            <li>
              개발자 지원시, 본인의 github개정 필수로 지참해주셔야 합니다.{" "}
            </li>
            <li>
              지원서에 * 문항은 꼭 채워주시고 자신이 개발하고 싶은 서비스
              간단한거라도 좋으니 꼭 적어주시기 바랍니다!{" "}
            </li>
            <li>
              지원서에 기재하신 개인정보는 websolute신입 회원 모집과 결과 전달을
              위해 사용되며, 지원서 제출 시 개인정보 수집 및 이용에 동의한
              것으로 간주합니다. 다른 목적으로는 이용되지 않으며, 모집일정 이후
              즉시 폐기됩니다.{" "}
            </li>
          </ul>
        </nav>
        <Footer />
      </>
    );
  }
}
export default Recruitment;
