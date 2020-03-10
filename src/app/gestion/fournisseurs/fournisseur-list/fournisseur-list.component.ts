import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';
import { MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { FournisseurComponent } from '../fournisseur/fournisseur.component';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  private dataSource ;
  colums=["nomFour","nomCourtFour","villeFour","adresseFour","telFixFour","telMobileFour","faxFour","emailFour","actions"]
  constructor( private service : 
    FournisseurService,private not : MatSnackBar,private dialog : MatDialog) { }

  ngOnInit() {
    this.dataSource=this.service.getAllFours();
  }
  onDelete(id){
  
    if(confirm('etes vous sur ?')){
    this.service.deleteFour(id).subscribe(()=>{
      this.not.open('enregistrement supprimés','', {
        duration: 2000
      });
      this.dataSource=this.service.getAllFours();
    });
    }
  }
  ajouter(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(FournisseurComponent,dialogConfig)
  }
  onEdit(row){
    this.service.fillFormGroup(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(FournisseurComponent,dialogConfig)
    
  }
}
