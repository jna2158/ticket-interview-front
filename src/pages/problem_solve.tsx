import React, { useState } from "react";
import Problem from "../components/interview/solve_problem/ticket_solve_problem";
import { useLocation } from "react-router-dom";

export default function ProblemSolve() {
  const { state: data } = useLocation();
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const nextProblem = () => {
    setCurrentProblemIndex(currentProblemIndex + 1);
  }

  return (
    <>
      <Problem
        data={data[Object.keys(data)[currentProblemIndex]]}
        nextProblem={nextProblem}
        isLast={Object.keys(data).length - 1 === currentProblemIndex}
        totalLength={Object.keys(data).length}
        currentIndex={currentProblemIndex}
      />
    </>
  )
}