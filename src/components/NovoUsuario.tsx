import React, { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { UsuarioContextType } from "../contexts/UsuarioContextType";
import { Box, Container  } from "@chakra-ui/layout";
import { useToast,Input, Select} from "@reverb-ui/react";
import { toast } from "@chakra-ui/toast";
import { toastError, toastSuccess } from "../Utils/toast";
import { useForm } from "react-hook-form";
import { Usuario } from "../models/Usuario";
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";


interface IAddUsuario{
    id:any,
    nome:string,
    senha:string,
    tipoClaim:string
}

const onReturn = (history:any) => {
    history.push("/usuarios"); 
}

const NovoUsuario = () => {
    
    const [id,setid] = useState("");
    const [nome,setnome] = useState("");
    const [senha,setSenha] = useState("");    
    const [tipoClaim,setclaim] = useState("");
    const [ValorClaim,setValorclaim] = useState("");

    const {usuarioId} = useParams();    
    const isPermissao = true;
    const history = useHistory();
    const token = localStorage.getItem("token");
        
    const authotization = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    
    useEffect(()=>{
        if(usuarioId === '0')        
            return;            
        else          
            loadUsuario();                    
    },[]);

    function saveOrUpdate()
    {       
        
        debugger;
        const data ={
            id,
            nome,
            senha,            
            tipoClaim,
            ValorClaim            
        }
        
        try{
        // eslint-disable-next-line no-restricted-globals
        event?.preventDefault()
            debugger;
            if(data.nome === "" || data.senha === "" || data.tipoClaim === "")
            {
                toast(toastError("Favor Preencher os campos para inserir o usuário"));                           
                return;
            }

            if(usuarioId === '0')
            {
                data.id = '0';        
                axios.post(`/api/Usuario/Cadastrar`,data,authotization                    
                ).then(response =>{                          
                    const result = JSON.parse(response.request.responseText) 
                    window.location.href = '/usuarios';
                    
                }).catch(error => {                    
                    if(error.response.status === 403)
                    {         
                        debugger;
                        toast(toastError("Você não tem permissão para salvar um usuário"));               
                        //alert("Você não tem permissão para salvar um usuário");       
                        
                        return;
                    }
                })
                
            }
            else
            {
                data.id = id;
                axios.put(`/api/Usuario/Atualizar`,data,{

                }).then(response=>{
                    const result = JSON.parse(response.request.responseText) as Usuario;
                    setnome(result.nome);
                    setSenha(result.senha);
                })
                window.location.href = '/usuarios';
            }            
            
        }
        catch(error){
            alert('Erro ao gravar usuário');            
        }
        //history.push("/usuarios");     
        
            //window.location.href = '/usuarios';
        
    }

    function loadUsuario()
    {
        debugger;
        try{
           axios.get(`/api/Usuario/ObterUsuarioPorId/${usuarioId}`,{

           }).then(response=>{
               debugger;
                const result = JSON.parse(response.request.responseText) as Usuario;      
                setnome(result.nome);
                setid(result.id);
                setSenha(result.senha);
                setclaim(result.tipoClaim);
           })
        }
        catch{

        }       
    }  

    const toast = useToast();
    //const { addUsuario } = useContext<UsuarioContextType>(UsuarioContext);
 
return(        
    <Container >       
    <Box padding="10px" marginTop="25%" bg="gray.100" >
        <div className="uk-margin-medium uk-card uk-card-default uk-card-body">
            <form onSubmit={saveOrUpdate}>     

                <div className="uk-margin">
                    <label className="uk-form-label form-horizontal-text">Login:</label>
                    <div className="uk-form-controls">                        
                        <input className="uk-input" placeholder="Nome" width="10rem" value={nome} onChange={e=> setnome(e.target.value)}/>     
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label form-horizontal-text">Senha:</label>
                    <div className="uk-form-controls">                        
                        <input type="password" className="uk-input" placeholder="Senha" value={senha} onChange={e=> setSenha(e.target.value)}/>     
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label form-horizontal-select">Permissões</label>
                    <div className="uk-form-controls">                     
                        <select value={tipoClaim} className="uk-select"  placeholder="Escolha uma opção" onChange={e=>setclaim(e.target.value)}>
                            <option>Escolha uma opção</option>
                            <option value="Gerente">Gerente</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
                             
                <div className="uk-margin">
                    <div className="uk-margin uk-width-1-1">                              
                        <tr>                                   
                            <button type="submit" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">{usuarioId === '0' ? 'Salvar' : 'Atualizar'}</button>                                    
                            
                        </tr>
                        <tr>                                   
                        <caption>Voltar:<button onClick={()=>onReturn(history)} uk-icon="reply"></button></caption>              
                        </tr>                                    
                    </div>    
                </div>
                
            </form>
            </div>
        </Box>   
    </Container>
    );
}
export default NovoUsuario