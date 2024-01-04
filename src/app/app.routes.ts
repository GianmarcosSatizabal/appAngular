import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SnickersOriginalComponent } from './snickers/snickers-original.component';
import { TablaPreciosComponent } from './tablaPrecios/tabla-precios.component';

export const routes: Routes = [
    {
        path: "header",
        component: HeaderComponent
    },

    {
        path: "snickers",
        component:SnickersOriginalComponent
    },

    {
        path: "tablaPrecios",
        component:TablaPreciosComponent 
    },

    {
        path:"",
        redirectTo: "/inicio",
        pathMatch: "full"
    }
];
