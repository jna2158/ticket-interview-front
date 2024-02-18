import React, { useState } from "react";
import { scoringProblem } from "../../services/InterviewService";
import { useNavigate } from "react-router-dom";

export default function Problem({data, nextProblem, isLast}: any) {
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const btnName = isLast ? "제출하기" : "다음";

  /* 답 입력 후 다음 버튼 클릭했을 때 */
  const handleClickNextBtn = async() => {
    if (isLast) {
      handleSubmit();
    } else {
      const param = {
        question: data,
        user_answer: userAnswer,
        last_problem: isLast
      }
      await scoringProblem(param)
      .then(res => {
        console.log(res);
        nextProblem();
      })
      .catch(err => {
        console.log(err);
        nextProblem();
      })
    }
  }

  /* 제출 버튼 클릭했을 때 */
  const handleSubmit = () => {
    navigate("/interview-score");
  }

  return (
    <div className="col-md-8 contact-form">
      <h3>{ data }</h3>
      <form className="ajax-form" id="contactForm" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <textarea className="form-control" name="message" placeholder="여기에 답을 입력하세요." value={userAnswer} onChange={e => setUserAnswer(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-default" onClick={handleClickNextBtn}>{btnName} <i className="fa-solid fa-caret-right"></i></button>
          </div>
      </form>
    </div>
  )
}