import { Component } from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import './About.css';

class About extends Component {
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
        <div className="background">
          <Menu />
          <div className="slogan">

            <h1 className="slogan_text">
              Websolute는 IT 업계를 주도하는
              개발자와 디자이너를 위한 모임입니다.<br /><br />

              자유롭게 협업하고 소통하며,
              자기역량 강화와<br /> 새로운 서비스 경험을 통해
              IT 인재로 발전하는 것을 목표로 합니다.
            </h1>
          </div>
        </div>

        <div className="activity_contens">

          <h2 className="title1">
            2년째 <br />멈추지 않는 열정!
          </h2>

          <div className="infomation">
            <div className="card">
              <div className="card-info">
                <div className="contents">
                  <h4 className="title">운영기간</h4>
                  <h2 className="value">2년</h2>
                  <p className="description">2020년 부터</p>
                </div>
              </div>
              <div className="card-info">
                <div className="contents">
                  <h4 className="title">런칭서비스</h4>
                  <h2 className="value">5+</h2>
                  <p className="description">기수별 런칭율 100%</p>
                </div>
              </div>
              <div className="card-info">
                <div className="contents">
                  <h4 className="title">가입 회원수</h4>
                  <h2 className="value">7명</h2>
                  <p className="description">신규 기수마다 약 2명씩 증가</p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div className="activity">
            <h2 className="title1">
              함께하는 <br />다양한 활동!
            </h2>
            <h3>정규 활동은 매주 월요일에 회의가 진행되며, 프로젝트를 진행합니다. <br />
              비활동 기간에는 프로젝트·공모전·스터디를 자율적으로 진행합니다.</h3>
          </div>
          <div className="icons_cards">
            <div className="icons_contents1">
              <div className="icons">
                <p className="iconsdescription">현직자의
                  경험을 공유합니다</p>
                <p className="icons_title">Invitation Session</p>
              </div>
            </div>
            <div className="icons_contents2">
              <div className="icons">
                <p className="iconsdescription">팀을 이루어서
                  IT 프로젝트를 진행합니다.</p>
                <p className="icons_title">IT Project</p>
              </div>
            </div>
            <div className="icons_contents3">
              <div className="icons">
                <p className="iconsdescription">새로운 사람들과
                  정보를 공유합니다</p>
                <p className="icons_title">Networking</p>
              </div>
            </div>
            <div className="icons_contents4">
              <div className="icons">
                <p className="iconsdescription">몰입할 수 있는 환경을
                  제공합니다</p>
                <p className="icons_title">Hackathon</p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />





        </div>


        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }
}
export default About;
