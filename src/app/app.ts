import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import * as LucideIcons from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [provideIcons({ ...LucideIcons})],
})
export class App {
  protected readonly title = signal('mizzle');
}
