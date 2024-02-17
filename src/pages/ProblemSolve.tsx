import React from "react";
import { useLocation } from "react-router-dom";
import Problem from "../components/Interview/problem";

export default function ProblemSolve() {
  const { state: data } = useLocation();
  console.log("state", data);
  return (
    <Problem />
  )
}