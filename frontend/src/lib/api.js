import { axiosInstance } from "./axios"

export const signUp = async(signupData) => {
    const res = await axiosInstance.post("/auth/signup",signupData)
    return res.data;
}

export const getAuthUser = async()=>{
    try {
        const res = await axiosInstance.get("/auth/me");
        return res.data
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const completeOnboarding = async(formData)=>{
const res = await axiosInstance.post("/auth/onboarding",formData)
return res.data
}

export const login = async(loginData)=>{
    const res = await axiosInstance.post("/auth/login",loginData);
    return res.data
}

export const logout =async()=>{
    const res = await axiosInstance.post("/auth/logout");
    return res.data;
}