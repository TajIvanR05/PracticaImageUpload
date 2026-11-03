import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FileService } from './services/service.files';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';

@NgModule({
  declarations: [App, UploadFileComponent, MenuComponent, InformesPdfComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([errorInterceptor])
    ),
    provideToastService(),
    FileService],
  bootstrap: [App],
})
export class AppModule {}
