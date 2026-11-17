import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
 title = signal('Alicia Fernandez');
}
