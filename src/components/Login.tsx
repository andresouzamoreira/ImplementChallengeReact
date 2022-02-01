import React, { useContext } from "react";
import { LoginContextType } from "../contexts/LoginContextType";
import { LoginContext } from "../contexts/LoginContext";
import { useForm } from "react-hook-form";

import { UseToastOptions } from "@chakra-ui/toast";
import {      
    useToast,
    Input,    
    Box
  } from "@reverb-ui/react"
import { Container } from "@chakra-ui/layout";
import { toastError } from "../Utils/toast";

interface AddLogin{
    login: string;
    senha: string;
}

const Logins = () => {
const toast = useToast();
    const { Logar }  = useContext<LoginContextType>(LoginContext);
    const{handleSubmit,register} = useForm();

    const onSubmit = (data:AddLogin) =>{    
        
        if(data.login === "" || data.senha === "")
        {
            toast(toastError("Favor preeenchero todos os campos do Login"));
            return;
        }
            Logar(data.login,data.senha,toast);             
    }   

    return(       
        <Container marginTop="200px"   centerContent top="100">
            <Box padding="10px" borderRadius="2xl"  bg="gray.100" >    
            <div className="uk-margin-medium uk-card uk-card-default uk-card-body">      
                <form onSubmit={handleSubmit<AddLogin>(onSubmit)}>                    

                    <div className="uk-margin">
                        <label className="uk-form-label form-horizontal-text">Login:</label>
                        <div className="uk-form-controls">    
                            <div className="uk-inline">      
                                <span className="uk-form-icon" uk-icon="icon: user"></span>                                          
                                <Input className="uk-input" placeholder="login" {...register('login')} width="10rem" />
                            </div>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label form-horizontal-text">Senha:</label>
                        <div className="uk-form-controls"> 
                            <div className="uk-inline">   
                                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>                                                
                                <Input type="password" className="uk-input" placeholder="senha" {...register('senha')} width="10rem" />
                            </div>
                        </div>
                    </div>                     
                        
                    <div className="uk-margin uk-width-1-1">     
                        <thead>
                            <tr>                                   
                                <button type="submit" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Logar</button>                                    
                            </tr>                    
                        </thead>          
                    </div>
                   
                </form>  
            </div>    
            </Box>   
        </Container>        
    );
}
export default Logins;

