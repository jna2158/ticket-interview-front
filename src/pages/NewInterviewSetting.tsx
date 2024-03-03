import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubjectCard from "../components/subjectCard";
import ProblemSelectCard from "../components/problemSelectCard";

export default function NewInterviewSetting() {
  const [subjectArr, setSubjectArr] = useState([
    {
      id: "DataStructure",
      title: "자료구조",
      subTitle: "데이터를 효율적으로 사용할 수 있도록 정리하는 방법",
      checked: false,
      problems: 0
    },
    {
      id: "Algorithm",
      title: "알고리즘",
      checked: false,
      problems: 0
    },
    {
      id: "Networking",
      title: "네트워크",
      subTitle: "컴퓨터 네트워크의 프로토콜과 서비스, 어플리케이션들 속에 담긴 법칙",
      checked: false,
      problems: 0
    },
    {
      id: "OperatingSystem",
      title: "운영체제",
      subTitle: "컴퓨터 소프트웨어의 동작원리를 전반적으로 다루는 영역",
      checked: false,
      problems: 0
    },
    {
      id: "Database",
      title: "데이터베이스",
      subTitle: "여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합",
      checked: false,
      problems: 0
    },
    {
      id: "Python",
      title: "Python",
      subTitle: "웹 애플리케이션, 소프트웨어 개발, 데이터 과학, 기계 학습에 널리 사용되는 프로그래밍 언어",
      checked: false,
      problems: 0
    },
    {
      id: "Javascript",
      title: "Javascript",
      subTitle: "동적 상호작용형 웹사이트를 만드는 데 사용되는 프로그래밍 언어",
      checked: false,
      problems: 0
    },
    {
      id: "GeneralProgramming",
      title: "프로그래밍 일반",
      subTitle: "프로그래밍의 주요 이론과 원리",
      checked: false,
      problems: 0
    },
    {
      id: "Personality",
      title: "인성",
      subTitle: "인성, 가치관, 태도, 업무 능력 점검하는 영역",
      checked: false,
      problems: 0
    }
  ]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [currentStep, setCurrentStep] = useState("selectCategory");

  useEffect(() => {
    setButtonDisabled(subjectArr.filter(el => el.checked)?.length === 0 ? true : false);
  }, [subjectArr]);

  const handleClickButton = () => {
    if (buttonDisabled) return;
    setCurrentStep("selectProblemNumber");
  }

  return (
    <Wrapper>
      <InterviewSection>
        <Title>
          { currentStep === "selectCategory" ? "문제 선택하기" : "문제 수 선택하기" }
        </Title>
        <SubTitle>
          { currentStep === "selectCategory" ? "로그인을 하면 한 카테고리 당 최대 10개의 문제를 풀 수 있어요." : null }
        </SubTitle>
        { currentStep === "selectCategory"
          ? <SubjectCard subjectArr={ subjectArr } setSubjectArr={ setSubjectArr }/>
          : <ProblemSelectCard subjectArr={ subjectArr.filter(el => el.checked) } setSubjectArr={ setSubjectArr }/>}
        <Button buttonDisabled={buttonDisabled} onClick={handleClickButton}>
          { currentStep === "selectCategory" ? "문제 수 선택하러 가기" : "면접보러 가기" }
        </Button>
      </InterviewSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #171717;
  width: 100vw;
  height: auto;
  min-height: 100vh;
`;
const InterviewSection = styled.div`
  width: 100vw;
  padding: 5% 2% 2%;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #ffd43b;
  font-family: "Gowun Dodum", sans-serif;
`
const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  color: #fff4e6;
`;
const Button = styled.button<{buttonDisabled: boolean}>`
  border-radius: 7px;
  font-size: 1.7rem;
  font-weight: 500;
  width: 15vw;
  height: 6vh;
  margin-left: 40%;
  background-color: ${props => props.buttonDisabled ? "#fff4e6" : "#ffe066"};
  color: ${props => props.buttonDisabled ? "#868e96" : "#212529"};
`;