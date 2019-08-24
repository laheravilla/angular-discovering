// Routing configurations

// Import Angular Module Routers
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { ComputerComponent } from './computer/computer.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ProgrammingLanguageComponent } from './programming_language/programming_language.component';
import { FrameworkComponent } from './framework/framework.component';

// Array of routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // Home route
    {path: 'computer', component: ComputerComponent},
    {path: 'videogame', component: VideogameComponent},
    {path: 'programming-language', component: ProgrammingLanguageComponent},
    {path: 'framework', component: FrameworkComponent},
    {path: '**', component: HomeComponent}, // Mandatory 404 route at the end!! If component doesn't exist, load Home
];

// Export module to be used
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // Pass my routes