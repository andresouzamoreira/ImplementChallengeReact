import axios from "axios";
import React, { useState } from "react";
import { useHistory,Redirect } from "react-router-dom";
import {Usuario} from "../models/Usuario"
import { useToast} from "@reverb-ui/react";
import { toast } from "@chakra-ui/toast";
import { toastError, toastSuccess } from "../Utils/toast";

interface UsuarioListItemProps{
   usuario: Usuario
}

const onRemove = (usuario: Usuario, toast: any, history: any) => {    
    
    axios.delete(`api/usuario/Deletar/${usuario.id}`,
    ).then(response => {        
        if(response?.status === 200)
        {         
          toast(toastSuccess("Registro deletado com sucesso"));  
          (window.location.href = '/usuarios');           
        }
    }).catch(error => {
        if(error.response.status !== 200)
            toast(toastError("Ops,acontenceu um erro e o Registro não foi deletado."));    
    })
    
}

const onEdit = (usuario: Usuario, historia: any) => {
    
    historia.push("/usuario/novo/"+usuario.id);
   
}

const UsuarioListItem = (props: UsuarioListItemProps) => {

const toast = useToast();
const history = useHistory();
    return(               
        <tr>
            <td>{props.usuario.id}</td>
            <td>{props.usuario.nome}</td>
            <td>{props.usuario.tipoClaim}</td>
            <td><button onClick={()=>onRemove(props.usuario,toast, history)} className="uk-icon-button uk-button-danger" uk-icon="trash"></button></td>
            <td><button onClick={()=>onEdit(props.usuario,history)} className="" uk-icon="file-edit"></button></td>
        </tr>
    )
}

export default UsuarioListItem;