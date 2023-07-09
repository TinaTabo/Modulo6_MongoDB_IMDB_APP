import { Professional } from "./professional";

export class Response {
    constructor(public error:boolean,
                public code:number,
                public message:string,
                public result:Professional[]
                ){}
}