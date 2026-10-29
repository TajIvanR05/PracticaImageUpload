import { Component, ElementRef, ViewChild } from '@angular/core';
import { FileService } from '../../services/service.files';
import { File } from '../../../models/file';

@Component({
  selector: 'app-upload-file-component',
  standalone: false,
  templateUrl: './upload-file-component.html',
  styleUrl: './upload-file-component.css',
})
export class UploadFileComponent {

  @ViewChild("fichero") fichero! : ElementRef;

  constructor(
    private _service : FileService,
  ) {}

  uploadFile() : void {
    const file = (this.fichero.nativeElement as HTMLInputElement).files?.[0];

    if(file){

      const reader = new FileReader();

      reader.onload = () => {
        const fileString = (reader.result as string).split(',')[1];

        const fichero : File = new File(
          file.name, fileString
        );

        this._service.uploadFile(fichero)
          .subscribe({
            next: (res) => console.log("Uploaded!"),
            error: (err) => console.error("No se pudo subir el fichero!", err)
          })
      }

      reader.readAsDataURL(file);

    }
    
  }
}
