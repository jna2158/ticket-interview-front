import React, { useState } from "react";
import Problem from "../components/Interview/problem";
import { useLocation } from "react-router-dom";

export default function ProblemSolve() {
  // const { state: data } = useLocation();
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const data: any = {
    "DataStructure-[1]": "큐(Queue) 자료 구조란 무엇인가요? 또한 큐 자료구조의 장/단점은 무엇일까요?",
    "Algorithm-[1]": "선택 정렬(Selection Sort) 에 대한 알고리즘 동작 원리, 장/단점에 대해서 설명해주세요.",
    "Networking-[1]": "HTTP와 HTTPS의 차이점에 대해 설명해주세요.",
    "OperatingSystem-[1]": "프로세스와 스레드의 차이점은 무엇인가요?",
    "Database-[1]": "RDBMS 대해 설명해주고, 각각의 장단점을 적어주세요.",
    "GeneralProgramming-[1]": "메모리 누수는 무엇이며, 어떻게 방지할 수 있나요?",
    "Personality-[1]": "마감 기한에 쫓기는 프로젝트를 어떻게 관리하나요?",
    "Python-[1]": "Python에서 데코레이터는 어떤 목적으로 사용되나요?",
    "Javascript-[1]": "자바스크립트의 스코프와 클로저에 대해서 설명해주세요."
  };

  const nextProblem = () => {
    setCurrentProblemIndex(currentProblemIndex + 1);
  }

  return (
    <>
      <Problem data={data[Object.keys(data)[currentProblemIndex]]} nextProblem={nextProblem} isLast={Object.keys(data).length - 1 === currentProblemIndex}/>
    </>
  )
}