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
const checkedItem: ISubject[] = [];

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
    // {
    //   id: "algorithm",
    //   title: "알고리즘",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "network",
    //   title: "네트워크",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "os",
    //   title: "운영체제",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "database",
    //   title: "데이터베이스",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "python",
    //   title: "Python",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "javascript",
    //   title: "Javascript",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "programming",
    //   title: "프로그래밍 일반",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // },
    // {
    //   id: "personal",
    //   title: "인성",
    //   checked: false,
    //   problems: 0,
    //   left: "0%",
    //   top: "0vh"
    // }
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
      set({ xys: [0, 0, 1] });
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

    const clickedIndex = _.findIndex(subjectArr, {id: e.target.id});

    if (e.target.checked) {
      checkedItem.push({
        id: subjectArr[clickedIndex].id,
        title: subjectArr[clickedIndex].title,
        checked: subjectArr[clickedIndex].checked,
        problems: subjectArr[clickedIndex].problems,
        left: subjectArr[clickedIndex].left,
        top: subjectArr[clickedIndex].top
      });
    }
    
    const updatedSubjectArr = [...subjectArr];

    // [1]. 오른쪽 또는 왼쪽으로 위치 이동
    if (clickedIndex !== -1) {
      const left = subjectArr[clickedIndex].left === "0%" ? "110%" : "0%";
      let cnt = 0;
      for (let i = 0; i <= clickedIndex - 1; i++) {
        if (updatedSubjectArr[i].checked === false) {
          cnt++;
        }
      }

      let top = "0vh";
      if (e.target.checked) {
        top = `${-(clickedIndex * 9.5) + ((checkedItem.length - 1) * 9.5)}vh`;
      } else {
        top = `${(cnt * 9.5) - (clickedIndex * 9.5)}vh`;
      }
      updatedSubjectArr[clickedIndex] = {
        ...updatedSubjectArr[clickedIndex],
        left,
        top,
        checked: e.target.checked
      };
    }

    // [2]. 왼쪽에 있는 item의 높이 이동
    const num = e.target.checked ? -9.5 : 9.5;
    for (let i = clickedIndex + 1; i <= subjectArr.length - 1; i++) {
      if (!subjectArr[i].checked && subjectArr[i].id !== e.target.id) {
        updatedSubjectArr[i] = {
          ...updatedSubjectArr[i],
          top: `${Number(subjectArr[i].top.split("vh")[0]) + num}vh`
        };
      }
    }

    // [3]. 오른쪽에 있는 item의 높이 이동
    if (!e.target.checked) {
      
      const idx = _.findIndex(checkedItem, {id: e.target.id});

      for (let i = idx + 1; i <= checkedItem.length - 1; i++) {
        const j = _.findIndex(updatedSubjectArr, {id: checkedItem[i].id});
        updatedSubjectArr[j] = {
          ...updatedSubjectArr[j],
          top: `${Number(updatedSubjectArr[j].top.split("vh")[0]) - 9.5}vh`
        };
      }
      checkedItem.splice(idx, 1);
    }

    setSubjectArr(updatedSubjectArr);
  }

  return (
    <animated.div
      onClick={(e: any) => handleCheckBoxClick(e)}
      style={{ transform: props.xys.to(trans) }}
    >
      {/* <CheckBoxWrapper box={el} className="form-check">
        <CheckInput
          className="form-check-input"
          type="checkbox"
          id={el.id}
        />
        <CheckLabel className="form-check-label border-bottom" htmlFor={el.id}>
          {el.title}
        </CheckLabel>
      </CheckBoxWrapper> */}

      <CheckBoxWrapper box={el} className="container">
        <CheckInput
          className="form-check-input"
          type="checkbox"
          id={el.id}
        />
        <CheckLabel className="container">
          <div className="col-md-4">
            <div className="row services-item sans-shadow text-center">
              <i className="fa fa-cogs fa-3x"></i>
              <h4>{el.title}</h4>
              {/* <p>We build Wordpress and custom plugins and back-end solutions.</p> */}
            </div>
          </div>
        </CheckLabel>
      </CheckBoxWrapper>

    </animated.div>
  );
}
const SectionWrapper = styled.div`
  display: flex;
  margin-left: 17px;
`;

/* Left Section */
const LeftSection = styled.div`
  width: 50%;
  height: auto;
  border-right: 1px solid gray;
  margin-left: 7%;
`;

const CheckBoxWrapper = styled.div<{box: ISubject}>`
  margin: 2vh;
  height: 7.5vh;
  transition: left .4s, top .5s, transform .5s;
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

  /* &:hover {
    transition: all .5s;
    transform: scale(1.05);
  } */
`;
/* // LeftSection -- */


/* Right Section */
const RightSection = styled.div`
  width: 50%;
  height: auto;
`;
/* // RightSection -- */