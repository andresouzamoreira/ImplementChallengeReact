import { Box, Container } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BrowserRouter, Link, Route, useHistory } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { UsuarioContextType } from "../contexts/UsuarioContextType";
import NovoUsuario from "./NovoUsuario";
import UsuarioListItem from "./UsuarioListItem";


const onLogout = (history: any) => {
    localStorage.setItem("token","");
    history.push("/");    
}

const UsuarioList = () => {

    var [search,setSearch] = useState("");

    const onFiltro = (finding:any) =>
    {              
        setSearch(finding);
    }

    const history = useHistory();  
    const {usuarios} = useContext<UsuarioContextType>(UsuarioContext);
    
    var usuarioFiltro = usuarios;
    
    if(search !== "")
    {        
         usuarioFiltro = usuarios.filter((item) => {
            return Object.values(item.nome).join('').includes(search)
        });
    }

    return(      
        <Box padding="10px" paddingTop="5px" marginLeft="100px" marginTop="10%" bg="gray.100" >   
                <div  className="uk-margin-medium uk-card uk-card-default uk-card-body">
                <caption>Logout:<button onClick={()=>onLogout(history)} uk-icon="sign-out"></button></caption>
                    <div className="uk-margin">
                        <label className="uk-form-label form-horizontal-text">Pesquisa:</label>
                        <div className="uk-form-controls">                        
                            <input className="uk-input" placeholder="Pesquisar" onChange={e=> onFiltro(e.target.value)}/>     
                        </div>
                    </div>
                    <table className="uk-table uk-table-striped">
                  
                        <div className="uk-navbar-right"> 
                            <ul className="uk-navbar-nav">
                                <li>                            
                                    <Link uk-icon="icon: plus; ratio: 1.2" className="button" to="/usuario/novo/0"></Link>                        
                                </li>
                            </ul>                                                  
                        </div>
                        <caption>Lista de Usuários</caption>
                            <thead>   
                                <tr>
                                    <th>id</th>
                                    <th>Nome</th>
                                    <th>Tipo claim</th>                                   
                                </tr>
                            </thead>
                            <tbody>                                                   
                                {                                                               
                                    usuarioFiltro?.map(usuario => (<UsuarioListItem key={usuario.id} usuario={usuario}></UsuarioListItem>))
                                }                                                                                  
                            </tbody>
                            
                    </table>                      
                </div>
            </Box>      
    );
}

export default UsuarioList;