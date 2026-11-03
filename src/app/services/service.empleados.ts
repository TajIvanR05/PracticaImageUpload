import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Perfil } from "../models/perfil";
import { environment } from "../../environments/environment.development";
import { Injectable } from "@angular/core";

@Injectable()
export class EmpleadosService {
    constructor(
        private _httpClient : HttpClient,

    ){}

    getPerfil(token : string) : Observable<Perfil> {
        let req = "api/Empleados/PerfilEmpleado";
        
        return this._httpClient.get<Perfil>(
            environment.apiEmpleados + req,
        {
            headers: new HttpHeaders().set("Authorization", token)
        });
    }
}