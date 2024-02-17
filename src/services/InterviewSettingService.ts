import instance from "../shared/axiosIntercepter";

type userType = "user" | "nouser";

export const reqProblems = (userType: userType, req: any): Promise<any> => {
  return instance.post(`/api/ticket/problems/${userType}`, { ...req });
}