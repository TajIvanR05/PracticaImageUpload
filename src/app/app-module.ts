import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { FileService } from './services/service.files';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';
import { AuthService } from './services/service.auth';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ErrorComponent } from './components/error-component/error-component';

@NgModule({
  declarations: [
    App,
    UploadFileComponent,
    MenuComponent,
    InformesPdfComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withXhr(), withInterceptors([errorInterceptor])),
    provideToastService(),
    FileService,
    ServiceEquipos,
    AuthService,
  ],
  bootstrap: [App],
})
export class AppModule {}
