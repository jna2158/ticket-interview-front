import instance from "../shared/axios_interceptor";

type userType = "user" | "nouser";

export const reqProblems = (userType: userType, req: any): Promise<any> => {
  return instance.post(`/api/ticket/problems/${userType}`, { ...req });
}

export const delSession = () => {
  return instance.delete("/api/score/scoring");
}