import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const rutas : Routes = [
    {
        path: '',
        component: PorPaisComponent, //No olvidar que debe estar importado en el Module de la aplicación y exportado de su Module.
        pathMatch: 'full', //Cuando estemos directamente en http://localhost:4200/ (URL Exacto) nos quedemos allí.
    },
    {
        path: 'pais',
        component: PorPaisComponent, //No olvidar que debe estar importado en el Module de la aplicación y exportado de su Module.
    },
    {
        path: 'region',
        component: PorRegionComponent, //No olvidar que debe estar importado en el Module de la aplicación y exportado de su Module.
    },
    {
        path: 'capital',
        component: PorCapitalComponent, //No olvidar que debe estar importado en el Module de la aplicación y exportado de su Module.
    },
    {
        path: 'pais/:codigoPais',
        component: VerPaisComponent, //No olvidar que debe estar importado en el Module de la aplicación y exportado de su Module.
    },
    {
        path: '**', //Cualquier otro Path que no exista ...
        redirectTo: '' //Pongamoslo a redireccionar a la ruta principal.
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas) //Rutas padres, y le asignamos las rutas anteriormente definidas.
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}