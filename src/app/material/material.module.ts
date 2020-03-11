import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDividerModule,
    Material.MatListModule,
    Material.MatSnackBarModule,
    Material.MatDialogModule
  
  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDividerModule,
    Material.MatListModule,
    Material.MatSnackBarModule,
    Material.MatDialogModule



  ]
})
export class MaterialModule { }
