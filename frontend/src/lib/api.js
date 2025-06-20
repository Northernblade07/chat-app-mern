import { axiosInstance } from "./axios"

export const signUp = async(signupData) => {
    const res = await axiosInstance.post("/auth/signup",signupData)
    return res.data;
}

export const getAuthUser = async()=>{
      const res = await axiosInstance.get("/auth/me");
      return res.data
}