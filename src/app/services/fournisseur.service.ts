import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournissuer } from '../models/Fournissuer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private url ="http://localhost:3000/fournissuers";

  constructor(private http : HttpClient) { }
  getAllFours(){
    return this.http.get<
    Fournissuer []>(this.url);
  }
  addFour(f){
    
    return this.http.post<Fournissuer>(this.url,f);
  }
  deleteFour(id){
    
    return this.http.delete(`${this.url}/${id}`);
  }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomFour :new FormControl('',Validators.required),
    nomCourtFour : new FormControl('',Validators.required),
    villeFour :  new FormControl('',Validators.required),
    adresseFour : new FormControl('',Validators.required),
    telFixFour  :new FormControl('',[Validators.required , Validators.minLength(8)]),
    telMobileFour:new FormControl('',[Validators.required , Validators.minLength(8)]),
    faxFour:new FormControl('',[Validators.required , Validators.minLength(8)]),
    emailFour : new FormControl('',[Validators.required,Validators.email]),


  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomFour: '',
      nomCourtFour: '',
      villeFour: '',
      adresseFour: '',
      telFixFour: '',
      telMobileFour: '',
      faxFour: '',
      emailFour: ''
    });

}  
}
