import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseUrl = "http://localhost:3000/task";
var httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  getTask(){
    return this._http.get(baseUrl);
  }

  createTask(task: { title: any}){
    return this._http.post(baseUrl,JSON.stringify(task),httpOptions);
  }

  updateTask(id:any,task: any){
    return this._http.put(baseUrl+"/"+id,JSON.stringify(task),httpOptions);
  }

  deleteTask(id: any){
    return this._http.delete(baseUrl+"/"+id);
  }
}


