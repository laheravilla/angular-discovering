import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Importar para los forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components
import { VideogameComponent } from './videogame/videogame.component';
import { ProgrammingLanguageComponent } from './programming_language/programming_language.component';
import { FrameworkComponent } from './framework/framework.component';
import { ComputerComponent } from './computer/computer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent, // Cargar modulo VideogamesComponent
    ProgrammingLanguageComponent,
    FrameworkComponent,
    ComputerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Cargar modulo de form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
