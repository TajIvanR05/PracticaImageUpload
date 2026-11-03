import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ErrorComponent } from './components/error-component/error-component';

const routes: Routes = [
  { path: "", component: UploadFileComponent},
  { path: "informes", component: InformesPdfComponent},
  { path: "error", component: ErrorComponent },
  { path: "equipos", component: EquipoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
