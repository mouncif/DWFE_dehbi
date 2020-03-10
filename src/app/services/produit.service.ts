import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url ="http://localhost:3000/produits";

  constructor(private http : HttpClient) { }
  getAllProduits(){
    return this.http.get<Produit []>(this.url);
  }
  addProduit(p){
    return this.http.post<Produit>(this.url,p);
  }
  deleteProduit(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  updateProduit(p){
    return this.http.put<Produit>(`${this.url}/${p.id}`,p);
  }
  form : FormGroup = new FormGroup({
    id :new FormControl(null),
    nomProduit :new FormControl('',Validators.required),
    nomCourtProduit : new FormControl(''),
    prixBaseProduit :  new FormControl(0,Validators.required),
    prixVenteProduit : new FormControl(0,Validators.required),
    seuilMax  :new FormControl(0,[ ]),
    uniteProduit:new FormControl(0,[Validators.required]),
    quantiteInit : new FormControl(0,[Validators.required]),
    quantiteAct : new FormControl(0,[Validators.required])

  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nomProduit: '',
      nomCourtProduit: '',
      prixBaseProduit: 0,
      prixVenteProduit: 0,
      seuilMax: 0,
      uniteProduit: 0,
      quantiteInit: 0,
      quantiteAct: 0
    });
}  
fillFormGroup(produit){
  this.form.setValue(produit);
}
}
