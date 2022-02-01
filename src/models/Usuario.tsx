export class Usuario{
    Id(Id: any) {
        throw new Error("Method not implemented.");
    }
    constructor(                
                public id:any,
                public nome:string,             
                public senha:string,
                public token:string,
                public tipoClaim:string,
                public valorClaim:string
            ){

        }
}