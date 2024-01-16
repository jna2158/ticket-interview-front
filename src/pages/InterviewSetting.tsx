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
    <Wrapper>
      <SettingTitle>Setting</SettingTitle>
      <SectionWrapper>
        <LeftSection>
          <CheckBoxWrap>
            {
              subjectArr.map(el => {
                return (
                  <>
                    <CheckInput type="checkbox" id={el.id} name={el.id}/>
                    <CheckLabel htmlFor={el.id}>{el.title}</CheckLabel>
                    <br /><br />
                  </>
                )
              })
            }
          </CheckBoxWrap>
        </LeftSection>
        <RightSection>오른쪽 영역</RightSection>
      </SectionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

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
`;

const LeftSection = styled.div`
  width: 50%;
  height: auto;
`;

const CheckBoxWrap = styled.section`
  border-right: 1px solid gray;
  padding: .5%;
`;

const CheckInput = styled.input`
  appearance: none;
  width: 2.5vw;
  height: 5vh;
  border: 1.1px solid #11264f;
  border-radius: 0.35rem;
  position: relative;
  padding: 1px;
  background: rgb(68, 84, 167);
  background: radial-gradient(circle, rgba(68, 84, 167, 1) 0%, rgba(174, 178, 227, 1) 100%);
  background-clip: content-box;
  &:checked {
    &::before {
      content: '\\2713';
      display: block;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 2.5rem;
    }
  }
`;

const CheckLabel = styled.label`
  position: relative;
  top: -13px;
  left: 2%;
  border-bottom: 1px solid gray;
  font-family: 'Gowun Dodum';
  font-weight: 600;
  cursor: pointer;
`;

const RightSection = styled.div`
  width: 50%;
  height: auto;
`;