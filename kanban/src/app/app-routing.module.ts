import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSectionComponent } from './create-section/create-section.component';
import { CreateTableauComponent } from './create-tableau/create-tableau.component';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { CreateFichesComponent } from './createFiches/create-fiches/create-fiches.component';
import {FichesComponent} from './fiches/fiches.component';
import { SectionsComponent } from './sections/sections.component';
import { TableauComponent } from './tableau/tableau.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';


const routes: Routes = [
  {path:'fiches',component:FichesComponent},
  {path:'createFiches', component:CreateFichesComponent},
  {path:'createutilisateur', component:CreateUtilisateurComponent},
  {path:'utilisateurs', component:UtilisateursComponent},
  {path:'tableau', component:TableauComponent},
  {path:'section', component:SectionsComponent},
  {path:'createsection', component:CreateSectionComponent},
  {path:'createTableau', component:CreateTableauComponent},
  {path:'update_utilisateur/:id', component:UpdateUtilisateurComponent},
  //{path:'',redirectTo:'fiches',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
