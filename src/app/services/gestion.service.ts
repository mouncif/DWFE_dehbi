import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private url ;
  constructor(private http : HttpClient) {}

  getAllClients(){
    this.url ='http://localhost:3000/clients';
    return this.http.get<Client[]>(this.url);
  }
  addClient(c){
    this.url ='http://localhost:3000/clients';
    return this.http.post<Client>(this.url,c);
  }
  deleteClient(id){
    this.url ='http://localhost:3000/clients';
    return this.http.delete(`${this.url}/${id}`);
  }
  updateClient(client){
    this.url ='http://localhost:3000/clients';
    return this.http.put(`${this.url}/${client.id}`, client);
  }



}
