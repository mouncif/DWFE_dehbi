import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { MatDialogRef } from '@angular/material';
import { Produit } from 'src/app/models/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produit;
  produits : Produit []=[]
  constructor(private service : ProduitService, public dialogRef: MatDialogRef<ProduitComponent>) { }

  ngOnInit() {
  }
  onSubmit(){
    
    if (!this.service.form.get("id").value){
      this.produit = this.service.form.value;
      this.service.addProduit(this.produit).subscribe((produit)=>{
        this.produits = [produit, ...this.produits];
        
    });
    }
    else {
      this.produit = this.service.form.value;
      this.service.updateProduit(this.produit).subscribe((produit)=>{
        this.produits = [produit, ...this.produits];
        
    });
    //window.location.reload();
    }
  this.service.form.reset()
  this.service.initializeFormGroup();
  this.dialogRef.close();
  window.location.reload();
  
}

}
