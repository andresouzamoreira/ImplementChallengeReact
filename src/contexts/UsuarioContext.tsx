import React, { createContext, useEffect, useState } from "react";
import { UsuarioContextType } from "./UsuarioContextType";
import{get} from "../services/UsuarioServices";
import { Usuario } from "../models/Usuario";
import {  } from "../services/UsuarioServices";
import axios from "axios";

export const UsuarioContext = createContext<UsuarioContextType>({
   usuarios:[],
   addUsuario: () => {},
   removerUsuario: () => {},
});
const UsuarioProvider = (props:any) =>{
    
    const [usuarios,setUsuarios] = useState<Usuario[]>((): any =>{});

    useEffect(() => {       
       
            axios.get('/api/Usuario/ObterTodos',{
                
        }).then(response => {
        debugger;
                const result = JSON.parse(response.request.responseText) as Usuario[];    
        return setUsuarios(result);
        })           

    },[]);

    const addUsuario = (id:any,login:string,senha:string,tipoClaim:string) => {        
        addUsuario(id,login,senha,tipoClaim);
        debugger;
    }

    const removerUsuario = (usuario: Usuario) => {
        const index = usuarios?.indexOf(usuario);
        setUsuarios(usuarios?.filter((_,i)=>i !== index));
    
    }
    return (
        <UsuarioContext.Provider value={{usuarios,addUsuario,removerUsuario}}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;