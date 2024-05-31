import {create} from 'zustand';
import { LocalStorageEnum } from '../enum/LocalStorage';

interface LoginResponse {
    token:string  ,
    "admin": any,
    token_node:string
}

interface AuthStore {
  user: any | null |undefined;
  token:string |null | undefined;
  isAuthenticated: boolean;
  login: (userData: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthState = create<AuthStore>((set) => {
   
    const storedUser :any   = localStorage.getItem(LocalStorageEnum.USER_KEY)  ;

  const storedToken = localStorage.getItem(LocalStorageEnum.TOKEN_KEY);
  const initialUser = (storedUser && storedUser !== 'undefined') ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    isAuthenticated: true,
    token:storedToken,
    login: async (userData) => {
        console.log(userData);
        localStorage.setItem(LocalStorageEnum.TOKEN_KEY , userData.token)

        localStorage.setItem(LocalStorageEnum.USER_KEY , JSON.stringify(userData.admin))

        set((state)=>({user:userData.admin , isAuthenticated:true , token:userData.token}))
        
    },
    logout: async () => {
         
        localStorage.removeItem(LocalStorageEnum.TOKEN_KEY )

        localStorage.removeItem(LocalStorageEnum.USER_KEY )
        set((state)=>({user:null , isAuthenticated:false , token:null}))

        
    },
  };
});

export default useAuthState;
