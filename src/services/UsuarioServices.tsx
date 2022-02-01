import axios from "axios";
import { Usuario } from "../models/Usuario";

export const get = (): any => {   
        axios.get('/api/Usuario/ObterTodos',{        
    }).then(response => {       
             const result = JSON.parse(response.request.responseText) as Usuario[];                                            
             return result;
    })    
}      
   


