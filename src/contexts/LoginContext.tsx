import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { logar } from "../services/LoginServices";
import { toastError } from "../Utils/toast";
import { LoginContextType } from "./LoginContextType";


export const LoginContext = createContext<LoginContextType>({
    Logar: () => {}
});



const LoginProvider = (props:any) => {
    const toast = useToast();
    const  Logar = (login:string ,senha:string) => {        
        logar(login,senha,toast);
    }
    return(
        <LoginContext.Provider value={{Logar}}>
            {props.children}    
        </LoginContext.Provider>
    )
}

export default LoginProvider;