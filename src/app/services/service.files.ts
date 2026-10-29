import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { File } from "../../models/file";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

@Injectable()
export class FileService {

    constructor(
        private _httpClient : HttpClient
    ){}

    uploadFile(file : File) : Observable<any> {
        let req = "api/TestingFiles";

        let fileJson = JSON.stringify(file);

        return this._httpClient.post(environment.apiURL + req, fileJson, {
            headers: new HttpHeaders().set("Content-Type", "application/json")
        });
    }
    
}