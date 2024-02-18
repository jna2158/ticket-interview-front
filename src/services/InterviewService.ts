import instance from "../shared/axiosIntercepter";

interface problem {
  question: string,
  user_answer: string,
  last_problem: boolean
}

export const scoringProblem = (param: problem): Promise<any> => {
  return instance.post(`/api/ticket/scoring`, {...param});
}