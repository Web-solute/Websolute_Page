import girl from "../../Media/girl.png";
import boy from "../../Media/boy.png";
import styled from "styled-components";
import "./Member.css";
const member_list = {
  list: [
    {
      name: "노수민",
      github: "https://github.com/suminRoh",
      img: girl,
    },
    {
      name: "박기웅",
      github: "https://github.com/sinbox0701",
      img: boy,
    },
    {
      name: "이지석",
      github: "https://github.com/dev-jiseok",
      img: boy,
    },
    {
      name: "김성중",
      github: "https://github.com/joseph-106",
      img: boy,
    },
    {
      name: "이서영",
      github: "https://github.com/seoyoung1006",
      img: girl,
    },
    {
      name: "이재근",
      github: "https://github.com/Geunjae512",
      img: boy,
    },
    {
      name: "최정환",
      github: "https://github.com/MONG-SIL",
      img: boy,
    },
  ],
};
const List = styled.div`
  margin: 50px;
  float: left;
  border-radius: 10px;
  padding: 35px;
  font-weight: 900;
  font-size: 23px;
  background-color: #f6f6f6;
`;

function Mem_list() {
  return member_list.list.map((mem) => {
    return (
      <List className="mem_li" key={mem.name}>
        <img src={mem.img}></img>
        <br />
        {mem.name}
        <br />
        <a target="_blank" href={mem.github}>
          github
        </a>
      </List>
    );
  });
}
export default Mem_list;
