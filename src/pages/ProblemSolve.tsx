import React from "react";
import Problem from "../components/Interview/problem";
import { useLocation } from "react-router-dom";

export default function ProblemSolve() {
  const { state: data } = useLocation();

  return (
    <>
      {
        Object.keys(data).map((key, i) => (
          <Problem data={data[key]}/>
        ))
      }
    </>
  )
}