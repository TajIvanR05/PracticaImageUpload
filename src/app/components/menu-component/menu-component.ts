import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  logOutEmpleado() : void {
    localStorage.removeItem("myToken");
  }
}
