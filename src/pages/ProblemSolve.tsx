import React from "react";
import { useLocation } from "react-router-dom";

export default function ProblemSolve() {
  const { state: data } = useLocation();
  console.log("state", data);
  return (
    <div>problem solve</div>
  )
}