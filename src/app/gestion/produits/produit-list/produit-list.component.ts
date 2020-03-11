import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProduitService } from 'src/app/services/produit.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProduitComponent } from '../produit/produit.component';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  constructor(private service : ProduitService,private not : MatSnackBar,private dialog : MatDialog) { }

  private dataSource ;
  colums=["nomProduit","nomCourtProduit","prixBaseProduit","prixVenteProduit","seuilMax","uniteProduit","quantiteInit","quantiteAct","actions"]
  ngOnInit() {
    this.dataSource=this.service.getAllProduits();
  }
  onDelete(id){
  
    if(confirm('etes vous sur ?')){
    this.service.deleteProduit(id).subscribe(()=>{
      this.not.open("enregistrement supprimés",'', {
        duration: 2000
      });
      this.dataSource=this.service.getAllProduits();
    });
    }
    
  }
  ajouter(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.disableClose = true;
    this.dialog.open(ProduitComponent,dialogConfig)
  }
  onEdit(row){
    this.service.fillFormGroup(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(ProduitComponent,dialogConfig)
    
  }

}
