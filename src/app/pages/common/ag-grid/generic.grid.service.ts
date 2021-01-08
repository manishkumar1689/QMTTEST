import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class GenericGridService {
    constructor() {
    }

    saveUserGridState(userGridStateModel: any): Observable<any> {
       return null
    }

    getUserGridStateByGridIdentifier(gridIdentifier: string): Observable<any> {
        return null;
    }

    resetUserGridState(gridIdentifier: string): Observable<any> {
        return null;
    }
}