import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import * as _ from "lodash";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.3];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface ISubject {
  readonly id: string;
  title: string;
  checked: boolean;
  problems: number;
  left: string;
  top: string;
};

export default function InterviewSetting() {
  const [subjectArr, setSubjectArr] = useState([
    {
      id: "structure",
      title: "자료구조",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "algorithm",
      title: "알고리즘",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "network",
      title: "네트워크",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "os",
      title: "운영체제",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "database",
      title: "데이터베이스",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "python",
      title: "Python",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "javascript",
      title: "Javascript",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "programming",
      title: "프로그래밍 공통",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "personal",
      title: "인성",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    }
  ]);   
  
  return (
    <SectionWrapper>
      <LeftSection>
        {subjectArr.map((el: ISubject) => {
          return (
            <SubjectItem el={el} subjectArr={subjectArr} setSubjectArr={setSubjectArr}/>
          );
        })}
      </LeftSection>
      <RightSection></RightSection>
    </SectionWrapper>
  );
}

const SubjectItem = ({el, subjectArr, setSubjectArr}: any) => {  
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
    onRest: () => {
      setTimeout(() => {
        set({ xys: [0, 0, 1] });
      }, 800);
    }
  }));

  /**
   * 체크박스 클릭했을 때 애니메이션
   * 
   * @params e: event
   */
  const handleCheckBoxClick = (e: any) => {
    if (!e.target || !e.target.id) return;

    // 애니메이션
    e.target.checked ? set({ xys: calc(1000, 500)}) : set({ xys: [0, 0, 1] });

    // 오른쪽으로 위치 이동
    const clickedIndex = _.findIndex(subjectArr, {id: e.target.id});
    const checkedCount = _.filter(subjectArr, {checked: e.target.checked}).length;
    const updatedSubjectArr = [...subjectArr];

    if (clickedIndex !== -1) {
      const left = subjectArr[clickedIndex].left === "0%" ? "110%" : "0%";
      updatedSubjectArr[clickedIndex] = {
        ...updatedSubjectArr[clickedIndex],
        left,
        top: `${-(clickedIndex * 8.2) + (checkedCount * 8.2)}vh`,
        checked: e.target.checked
      };
      setSubjectArr(updatedSubjectArr);
    }

    // 왼쪽에 있는 item 위치 이동
    const num = e.target.checked ? -8 : 8;
    for (let i = clickedIndex + 1; i <= subjectArr.length - 1; i++) {
      if (!subjectArr[i].checked) {
        updatedSubjectArr[i] = {
          ...updatedSubjectArr[i],
          top: `${Number(subjectArr[i].top.split("vh")[0]) + num}vh`
        };
      }
    }
    
    setSubjectArr(updatedSubjectArr);
  }

  return (
    <animated.div
      onClick={(e: any) => handleCheckBoxClick(e)}
      style={{ transform: props.xys.to(trans) }}
    >
      <CheckBoxWrapper box={el} className="form-check">
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

const CheckBoxWrapper = styled.div<{box: ISubject}>`
  margin: 2%;
  height: 7.5vh;
  transition: left 2s, top .5s, transform 2s;
  left: ${(props: any) => {
    return props.box.left;
  }};
  top: ${(props: any) => {
    return props.box.top;
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