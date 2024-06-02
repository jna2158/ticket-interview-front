import instance from "../shared/axios_interceptor";

interface problem {
  question: string,
  user_answer: string,
  last_problem: number
}

export const scoringProblem = (param: problem): Promise<any> => {
  return instance.post(`/api/score/scoring`, {...param});
}

export const result = () => {
  return instance.post(`/api/results/resultList`);
}