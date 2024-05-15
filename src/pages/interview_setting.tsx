import React, { useEffect, useState } from "react";
import SubjectCard from "../components/interview/subject_card";
import ProblemSelectCard from "../components/interview/select_number_card";
import * as _ from "lodash";
import { reqProblems } from "../services/interview_setting_service";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function InterviewSetting() {
  const subjectArr = useSelector((state: any) => state.interview.selectedCategory);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [currentStep, setCurrentStep] = useState("selectCategory");
  const navigate = useNavigate();

  useEffect(() => {
    setButtonDisabled(subjectArr.filter(el => el.checked)?.length === 0 ? true : false);
  }, [subjectArr]);
 
  /** 문제 수 선택하러가기 or 면접보러 가기 버튼 클릭 */
  const handleClickButton = () => {
    if (buttonDisabled) return;

    if (currentStep === "setNumber") {
      handleClickProblemSolveBtn();
    } else {
      setCurrentStep("setNumber");
    }    
  }
  
  /** 면접보러 가기 버튼 클릭 */
  const handleClickProblemSolveBtn = async(): Promise<void> => {
    const req: any = {};
    subjectArr.forEach((el): any => {
      req[el.id] = el.problems;
    });
    
    await reqProblems('user', req)
    .then(res => {
      navigate("/agreement", { state: res.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Wrapper>
      <Title>
        { currentStep === "selectCategory" ? "STEP2. 면접을 보고자 하는 카테고리를 선택 해 주세요." : "STEP3. 카테고리별로 원하는 문제 갯수를 선택 해 주세요." }
      </Title>
      { currentStep === "selectCategory"
        ? <SubjectCard subjectArr={ subjectArr }/>
        : <ProblemSelectCard subjectArr={ subjectArr.filter(el => el.checked) } />}
      <Button buttonDisabled={buttonDisabled} onClick={handleClickButton}>
        { currentStep === "selectCategory" ? "문제 수 선택하러 가기" : "면접보러 가기" }
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #1e1e1e, #000000);
`;
const InterviewSection = styled.div`
  width: 100vw;
  padding: 5% 2% 2%;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-top: 8vw;
  color: white;
`;
const Button = styled.button<{buttonDisabled: boolean}>`
  border-radius: 7px;
  font-size: 1.7rem;
  font-weight: 500;
  width: 15vw;
  height: 6vh;
  margin-left: 40%;
  background-color: ${props => props.buttonDisabled ? "#fff9db" : "#ffec99"};
  color: ${props => props.buttonDisabled ? "#868e96" : "#212529"};
`;