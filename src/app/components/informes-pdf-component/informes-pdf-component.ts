import { Component, ChangeDetectionStrategy } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  templateUrl: './informes-pdf-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './informes-pdf-component.css',
})
export class InformesPdfComponent {
  generateDocument(): void {
    let document: jsPDF = new jsPDF();

    document.setFontSize(18);
    document.text('My tuesday document!', 10, 10);
    document.setFontSize(12);

    const headers = [['Nombre', 'Email', 'Edad']];
    const data = [
      ['Diana', 'diana@gmail.com', 26],
      ['Adrian', 'adrian@gmail.com', 26],
      ['Lucia', 'lucia@gmail.com', 22],
      ['Sofia', 'sofia@gmail.com', 16],
    ];

    autoTable(document, {
      head: headers,
      body: data,
      startY: 20,
    });

    document.save('personas.pdf');
  }
}
