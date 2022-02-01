import { Usuario } from "../models/Usuario";
export interface UsuarioContextType{
    usuarios: Usuario[];
    addUsuario(id:any,login:string,senha:string,tipoClaim:string):void;
    removerUsuario(id:any,login:string,senha:string,tipoClaim:string):void;    
}