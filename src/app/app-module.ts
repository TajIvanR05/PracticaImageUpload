import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { provideHttpClient } from '@angular/common/http';
import { FileService } from './services/service.files';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, UploadFileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), FileService],
  bootstrap: [App],
})
export class AppModule {}
