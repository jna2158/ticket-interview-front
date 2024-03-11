import React, { useState } from "react";
import Problem from "../components/Interview/problem";
import { useLocation } from "react-router-dom";

export default function ProblemSolve() {
  // const { state: data } = useLocation();
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const data = {
    "DataStructure-[1]": "큐(Queue) 자료 구조란 무엇인가요? 또한 큐 자료구조의 장/단점은 무엇일까요?",
    "Networking-[1]": "HTTP와 HTTPS의 차이점에 대해 설명해주세요.",
    "Networking-[2]": "방화벽이란 무엇이며, 어떻게 네트워크 보안에 도움이 되나요? (어떤 기능들을 하나요?)",
    "OperatingSystem-[1]": "프로세스와 스레드의 차이점은 무엇인가요?",
    "OperatingSystem-[2]": "I/O Bound와 CPU Bound 에 대해서 각각 설명해주세요.",
    "Database-[1]": "RDBMS 대해 설명해주고, 각각의 장단점을 적어주세요."
  }
  const nextProblem = () => {
    setCurrentProblemIndex(currentProblemIndex + 1);
  }

  return (
    <>
      <Problem data={data[Object.keys(data)[currentProblemIndex]]} nextProblem={nextProblem} isLast={Object.keys(data).length - 1 === currentProblemIndex}/>
    </>
  )
}