import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logOut: () => void;
}

const useAuthStore = create<AuthState>((set)=>({
    isAuthenticated : false,
    login: (email:string,password:string)=>{
        if (email === "ak@gmail.com" && password === "12345") {
            set({ isAuthenticated: true })
            return true
        }
        return false
    },
    logOut: ()=> set({ isAuthenticated: false }),
}))

export default useAuthStore