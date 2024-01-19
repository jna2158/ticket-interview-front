import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface ISubject {
  readonly id: string;
  title: string;
  checked: boolean;
  problems: number;
  left: string;
};

const [subjectArr, setSubjectArr] = useState<ISubject[]>([
  {
    id: "structure",
    title: "1",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "algorithm",
    title: "2",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "network",
    title: "3",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "os",
    title: "4",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "database",
    title: "5",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "python",
    title: "6",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "javascript",
    title: "7",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "programming",
    title: "8",
    checked: false,
    problems: 0,
    left: "0%"
  },
  {
    id: "personal",
    title: "9",
    checked: false,
    problems: 0,
    left: "0%"
  }
]);

export default function InterviewSetting() {
  
  return (
    <SectionWrapper>
      <LeftSection>
        {subjectArr.map((el: ISubject) => {
          return (
            <SubjectItem el={el} />
          );
        })}
      </LeftSection>
      <RightSection>오른쪽 영역</RightSection>
    </SectionWrapper>
  );
}

const SubjectItem = ({el}: any) => {
  
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  /**
   * 체크박스 클릭했을 때 애니메이션
   * 
   * @params e: event
   */
  const handleCheckBoxClick = (e: any) => {
    if (!e.target) return;

    e.target.checked ? set({ xys: calc(1200, 500)}) : set({ xys: [0, 0, 1] });

  }

  return (
    <animated.div
      onClick={(e: any) => handleCheckBoxClick(e)}
      style={{ transform: props.xys.to(trans) }}
    >
      <CheckBoxWrapper left={el.left} className="form-check">
        <CheckInput
          className="form-check-input"
          type="checkbox"
          id={el.id}
        />
        <CheckLabel className="form-check-label border-bottom" htmlFor={el.id}>
          {el.title}
        </CheckLabel>
      </CheckBoxWrapper>
    </animated.div>
  );
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
  left: ${(props) => {
    return props.left;
  }};
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
/* // LeftSection -- */


/* Right Section */
const RightSection = styled.div`
  width: 50%;
  height: auto;
`;
/* // RightSection -- */