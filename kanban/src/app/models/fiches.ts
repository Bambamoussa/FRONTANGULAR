import { Utilisateur } from "./utilisateur"

export class Fiches {
    id_fiche!: number  
    libelle:string=''
    date_buttoir:Date | undefined
    lieu:string=''
    temps:number|undefined
    url:string|undefined
    utilisateur:any
    tableau:any
    section:any
    note:string=''
     
}
