import React, { useState } from "react";
import TicketSolveProblem from "../components/interview/solve_problem/ticket_solve_problem";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProblemSolve() {
  const { state: data } = useLocation();
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const nextProblem = () => {
    setCurrentProblemIndex(currentProblemIndex + 1);
  };
  const type = useSelector((state: any) => state.interview.interviewType);

  return (
    <>
      <TicketSolveProblem
        data={data[Object.keys(data)[currentProblemIndex]]}
        nextProblem={nextProblem}
        isLast={Object.keys(data).length - 1 === currentProblemIndex}
        totalLength={Object.keys(data).length}
        currentIndex={currentProblemIndex}
      />
    </>
  )
}