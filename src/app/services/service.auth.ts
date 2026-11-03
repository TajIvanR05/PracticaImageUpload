import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { User } from "../models/user";

@Injectable()
export class AuthService {

    constructor(
        private _httpClient : HttpClient
    ){}


    async getTokenAsync(user : User) : Promise<string> {
        let req = "Auth/Login";

        let userJson = JSON.stringify(user);

        let res : any = await firstValueFrom(this._httpClient.post(
            environment.apiURL + req,
            userJson,
            {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            }
        ));

        return res.response;
    }
}