import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import * as _ from "lodash";
import { API_HOST } from "../shared/ApiConstant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { reqProblems } from "../services/InterviewSettingService";

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.3];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const isLogged = localStorage.getItem("username");

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
      id: "DataStructure",
      title: "자료구조",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Algorithm",
      title: "알고리즘",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Networking",
      title: "네트워크",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "OperatingSystem",
      title: "운영체제",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Database",
      title: "데이터베이스",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Python",
      title: "Python",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Javascript",
      title: "Javascript",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "GeneralProgramming",
      title: "프로그래밍 일반",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    },
    {
      id: "Personality",
      title: "인성",
      checked: false,
      problems: 0,
      left: "0%",
      top: "0vh"
    }
  ]);
  const navigate = useNavigate();

  /* 문제 선택하고 확인 버튼 눌렀을 때 */
  const handleClickConfirmBtn = async(): Promise<void> => {
    const requestArr = _.reject(subjectArr, { problems: 0 });
    const req: any = {};
    requestArr.forEach((el): any => {
      req[el.id] = el.problems;
    });
    
    const userType = localStorage.getItem("username") ? "user" : "nouser";
    await reqProblems(userType, req)
    .then(res => {
      navigate("/problem-solving", { state: res.data });
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  return (
    <SectionWrapper>
      <LeftSection>
        {subjectArr.map((el: ISubject, idx: number) => {
          return (
            <SubjectItem key={idx} el={el} subjectArr={subjectArr} setSubjectArr={setSubjectArr}/>
          );
        })}
      </LeftSection>
      <RightSection>
        <button onClick={handleClickConfirmBtn}>확인</button>
      </RightSection>
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
   * @params e event
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

    // [1]. 오른쪽 또는 왼쪽으로 위치 이동 & 문제 수 0 -> 1개로 변경
    if (clickedIndex !== -1) {
      const left = subjectArr[clickedIndex].left === "0%" ? "110%" : "0%";
      let cnt = 0;
      for (let i = 0; i <= clickedIndex - 1; i++) {
        if (updatedSubjectArr[i].checked === false) {
          cnt++;
        }
      }

      let top = "0vh";
      let problems = 1;
      if (e.target.checked) {
        top = `${-(clickedIndex * 16.5) + ((checkedItem.length - 1) * 16.5)}vh`;
        problems = ++updatedSubjectArr[clickedIndex].problems;
      } else {
        top = `${(cnt * 16.5) - (clickedIndex * 16.5)}vh`;
        problems = --updatedSubjectArr[clickedIndex].problems;
      }
      updatedSubjectArr[clickedIndex] = {
        ...updatedSubjectArr[clickedIndex],
        left,
        top,
        checked: e.target.checked,
        problems
      };
    }

    // [2]. 왼쪽에 있는 item의 높이 이동
    const num = e.target.checked ? -16.5 : 16.5;
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
          top: `${Number(updatedSubjectArr[j].top.split("vh")[0]) - 16.5}vh`
        };
      }
      checkedItem.splice(idx, 1);
    }

    setSubjectArr(updatedSubjectArr);
  }

  /**
   * input number를 변경했을 때
   * 
   * @param e event
   */
  const changeNumberInput = (e: any) => {
    const value = Number(e.target.value);
    const updatedSubjectArr = [...subjectArr];
    const clickedIndex = _.findIndex(subjectArr, {id: e.target.id});
  
    if (value < 1) return;

    // updatedSubjectArr[clickedIndex] = {
    //   ...updatedSubjectArr[clickedIndex],
    //   problems: value
    // };
    // setSubjectArr(updatedSubjectArr);
    
    if (isLogged) {
      if (value >= 10) {
        console.log("로그인 한 유저 - 최대 10개까지 요청 가능합니다.");
      } else {
        console.log("로그인 한 유저 - 적절한 요청입니다.");
    
        updatedSubjectArr[clickedIndex] = {
          ...updatedSubjectArr[clickedIndex],
          problems: value
        };
      }
    } else {
      if (value > 1) {
        console.log("로그인 하지 않은 유저 - 1개 이상의 문제를 요청하려면 로그인이 필요합니다.");        
      } else {
        console.log("로그인 하지 않은 유저 - 적절한 요청입니다.");
        updatedSubjectArr[clickedIndex] = {
          ...updatedSubjectArr[clickedIndex],
          problems: value
        };
      }
    }
    setSubjectArr(updatedSubjectArr);
  }

  return (
    <>
      <animated.div
        onClick={(e: any) => handleCheckBoxClick(e)}
        style={{ transform: props.xys.to(trans) }}
      >
        <CheckBoxWrapper box={el} className="form-check container">
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
              </div>
            </div>
          </CheckLabel>
        </CheckBoxWrapper>
      </animated.div>
      {
        el.checked
        ? (
          <CheckNumberInput className="input-group">
            <input type="number" disabled={!isLogged} className="form-control" value={el.problems} onChange={(e) => changeNumberInput(e)}/>
            {/* <input type="number" id={el.id} className="form-control" value={el.problems} onChange={(e) => changeNumberInput(e)}/> */}
          </CheckNumberInput>
        )
        : null
      }
    </>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  margin-left: 17px;
`;

/* Left Section */
const LeftSection = styled.div`
  width: 45%;
  height: auto;
  border-right: 1px solid gray;
  margin-left: 7%;
`;

const CheckBoxWrapper = styled.div<{box: ISubject}>`
  display: flex;
  margin: 3vh 0 7vh;
  height: 9.5vh;
  max-width: 50%;
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
  margin: 7% 0 0 !important;
`;

const CheckLabel = styled.label`
  font-family: 'Gowun Dodum';
  font-weight: 600;
  font-size: 1.6rem;
  margin-left: 15%;
  max-width: 50%;
  cursor: pointer;
`;

const CheckNumberInput = styled.div`
  min-width: 6vw;
  min-height: 2vh;
  margin-left: 22vw;
  padding-top: 3vh;
`;

/* // LeftSection -- */


/* Right Section */
const RightSection = styled.div`
  width: 65%;
  height: auto;
`;
/* // RightSection -- */