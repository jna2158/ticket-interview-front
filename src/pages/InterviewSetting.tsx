import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function InterviewSetting() {
  const [props, set] = useSpring(() => ([
    { id: "structure", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "algorithm", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "network", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "os", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "database", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "python", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "javascript", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "programming", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } },
    { id: "personal", xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
  ]));

  interface Subject {
    readonly id: string;
    title: string;
    checked: boolean;
    problems: number;
  };

  const subjectArr: Subject[] = [
    {
      id: "structure",
      title: "자료구조",
      checked: false,
      problems: 0
    },
    {
      id: "algorithm",
      title: "알고리즘",
      checked: false,
      problems: 0
    },
    {
      id: "network",
      title: "네트워크",
      checked: false,
      problems: 0
    },
    {
      id: "os",
      title: "운영체제",
      checked: false,
      problems: 0
    },
    {
      id: "database",
      title: "데이터베이스",
      checked: false,
      problems: 0
    },
    {
      id: "python",
      title: "python",
      checked: false,
      problems: 0
    },
    {
      id: "javascript",
      title: "javascript",
      checked: false,
      problems: 0
    },
    {
      id: "programming",
      title: "프로그래밍 공통",
      checked: false,
      problems: 0
    },
    {
      id: "personal",
      title: "인성",
      checked: false,
      problems: 0
    }
  ];

  const handleCheckBox = (e: any) => {
    // console.log(e.target.id);
    // console.log(e.target.checked);
  }
  const handleCheckBoxClick = (e: any) => {
    // set({ xys: calc(1200, 500) })
    console.log("handleCheckBoxClick >> ");
    console.log(e.target.id);
    if (!e.target.id) return;

    console.log("props");
    console.log(props);
    
    
  }

  return (
    <SectionWrapper>
      <LeftSection>
          {
            subjectArr.map(el => {
              return (
                <animated.div
                  onClick={(e: any) => handleCheckBoxClick(e)}
                >
                  <CheckBoxWrapper className="form-check">
                    <CheckInput onChange={(e: any) => handleCheckBox(e)} className="form-check-input" type="checkbox" id={el.id} />
                    <CheckLabel className="form-check-label border-bottom" htmlFor={el.id}>{el.title}</CheckLabel>
                  </CheckBoxWrapper>
                </animated.div>
              )
            })
          }
      </LeftSection>
      <RightSection>오른쪽 영역</RightSection>
    </SectionWrapper>
  )
}
const SettingTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  align-items: center;
  padding: 1%;
  height: 10vh;
  font-family: 'Gowun Dodum';
`;

const SectionWrapper = styled.div`
  display: flex;
  margin-left: 2%;
`;

/* Left Section */
const LeftSection = styled.div`
  width: 50%;
  height: auto;
  border-right: 1px solid gray;
`;

const CheckBoxWrapper = styled.div`
  margin: 2%;
  height: 7.5vh;
`;

const CheckInput = styled.input`
  width: 30px;
  height: 30px;
  border-radius: .25rem;
`;

const CheckLabel = styled.label`
  font-family: 'Gowun Dodum';
  font-weight: 600;
  font-size: 1.6rem;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    transition: all .5s;
    transform: scale(1.05);
  }
`;

/* Right Section */
const RightSection = styled.div`
  width: 50%;
  height: auto;
`;