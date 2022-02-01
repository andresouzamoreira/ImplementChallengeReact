import { BrowserRouter , Route, Switch } from "react-router-dom";
import Login from "./Login";
import  LoginContext  from "../contexts/LoginContext";
import { ThemeProvider } from "@reverb-ui/react";
import NovoUsuario from "./NovoUsuario";
import UsuarioList from "./UsuarioList";
import UsuarioContext  from "../contexts/UsuarioContext";

const App = () => {
    return (      
        <ThemeProvider>  
               <UsuarioContext>                       
                    <LoginContext>                            
                        <BrowserRouter>                                                  
                            <div className="uk-container">
                                <Switch>                                                                             
                                    <Route path="/usuario/novo/:usuarioId"><NovoUsuario></NovoUsuario></Route>                                                           
                                    <Route path="/usuarios"><UsuarioList></UsuarioList></Route>
                                    <Route path="/"><Login></Login></Route>   
                                </Switch>
                            </div>                       
                        </BrowserRouter>                            
                    </LoginContext>      
               </UsuarioContext>                     
        </ThemeProvider>      
    )
}

export default App;