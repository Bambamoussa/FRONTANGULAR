import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichesComponent } from './fiches/fiches.component';
import { CreateFichesComponent } from './createFiches/create-fiches/create-fiches.component';
import {FormsModule} from '@angular/forms';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { TableauComponent } from './tableau/tableau.component';
import { SectionsComponent } from './sections/sections.component';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
 
import { CreateSectionComponent } from './create-section/create-section.component';
import { CreateTableauComponent } from './create-tableau/create-tableau.component';
import { UpdateFicheComponent } from './update-fiche/update-fiche.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { UpdateTableauComponent } from './update-tableau/update-tableau.component';
import { UpdateSectionComponent } from './update-section/update-section.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FichesComponent,
    CreateFichesComponent,
    UtilisateursComponent,
    TableauComponent,
    
    SectionsComponent,
         CreateUtilisateurComponent,
         CreateSectionComponent,
         CreateTableauComponent,
         UpdateFicheComponent,
         UpdateUtilisateurComponent,
         UpdateTableauComponent,
         UpdateSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
