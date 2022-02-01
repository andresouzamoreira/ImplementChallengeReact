import axios from "axios";
import { toastError } from "../Utils/toast";


export const logar = (login:string ,senha:string, toast:any): any =>{        

    debugger;    
    try {
        
        axios.post('/api/Login',{
        login: login,
        senha: senha, 
    }).then(ressponse => {
            
            const result = JSON.parse(ressponse.request.responseText);
            localStorage.setItem("token", result.data);
            
            if(result.data.statusCode !== 404)    
            {                   
              (window.location.href = '/usuarios');              
            }
            else{                           
               toast(toastError("Você não tem autorização para entrar no sistema"));            
              return;
            }
        return result;
    })          
    } catch (error) {
        return "";
    }    
}


