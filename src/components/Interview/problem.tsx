import React, { useState } from "react";
import { scoringProblem } from "../../services/InterviewService";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Problem({data, nextProblem, isLast}: any) {
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const btnName = isLast ? "제출하기" : "다음";

  /* 답 입력 후 다음 버튼 클릭했을 때 */
  const handleClickNextBtn = () => {
    const param = {
      question: data,
      user_answer: userAnswer,
      last_problem: isLast ? 1 : 0
    }

    scoringProblem(param)
    .then(res => {
      console.log(res);
      if(isLast) {
        navigate("/interview-score", { state: res.data });
      }
    })
    .catch(err => {
      console.log(err);
    })
    if (!isLast) {
      nextProblem(); 
    }
  }

  return (
    // <div className="col-md-8 contact-form">
    //   <h3>{ data }</h3>
    //   <form className="ajax-form" id="contactForm" onSubmit={e => e.preventDefault()}>
    //       <div className="form-group">
    //         <textarea className="form-control" name="message" placeholder="여기에 답을 입력하세요." value={userAnswer} onChange={e => setUserAnswer(e.target.value)}></textarea>
    //       </div>
    //       <div className="form-group">
    //         <button className="btn btn-default" onClick={handleClickNextBtn}>{btnName} <i className="fa-solid fa-caret-right"></i></button>
    //       </div>
    //   </form>
    // </div>
    <Wrapper>
      <ProblemSection>
        <span className="badge badge-warning">3/10</span>
        <ProblemTitle>{ data }</ProblemTitle>
          {/* <div className="form-group"> */}
            <TextArea className="form-control" name="message" placeholder="여기에 답을 입력하세요." value={userAnswer} onChange={e => setUserAnswer(e.target.value)}></TextArea>
          {/* </div> */}
      </ProblemSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #171717;
  width: 100vw;
  height: auto;
  min-height: 100vh;
`;
const ProblemSection = styled.div`
  width: 100vw;
  padding: 5% 2% 2%;
`;
const ProblemTitle = styled.div`
  font-size: 30px;
  padding-bottom: 2%;
  color: #E1E2E8;
`;
const TextArea = styled.textarea`
  width: 65vw;
  height: 50vh !important;
  background-color: #1F2325;
  border: 2px solid #495057;
  color: #cbc8c8 !important;
  line-height: 3vh;

  &:hover {
    background-color: #1F2325;
  }
  &:focus {
    background-color: #1F2325;
  }
`;