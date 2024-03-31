import React, { useState } from "react";
import TicketSolveProblem from "../components/interview/solve_problem/ticket_solve_problem";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ChattingSolveProblem from "../components/interview/solve_problem/chatting_solve_problem";

export default function ProblemSolve() {
  const { state: data } = useLocation();
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const nextProblem = () => {
    setCurrentProblemIndex(currentProblemIndex + 1);
  };
  const type = useSelector((state: any) => state.interview.interviewType);

  return (
    <>
      {(() => {
        switch (type) {
          case "Ticket":
            return (
              <TicketSolveProblem
              data={data[Object.keys(data)[currentProblemIndex]]}
              nextProblem={nextProblem}
              isLast={Object.keys(data).length - 1 === currentProblemIndex}
              totalLength={Object.keys(data).length}
              currentIndex={currentProblemIndex}
            />
            )
          case "Chatting":
            return (
              <ChattingSolveProblem />
            )
          default:
            return null;
        }
      })()}
    </>

  )
}