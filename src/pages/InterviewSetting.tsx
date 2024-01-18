import React from "react"
import styled from "styled-components"

export default function InterviewSetting() {
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

  return (
    <SectionWrapper>
      <LeftSection>
          {
            subjectArr.map(el => {
              return (
                <CheckBoxWrapper className="form-check">
                  <CheckInput className="form-check-input" type="checkbox" id={el.id} />
                  <CheckLabel className="form-check-label border-bottom" htmlFor={el.id}>{el.title}</CheckLabel>
                </CheckBoxWrapper>
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