import { Component } from '@angular/core';
import { InputModule } from 'carbon-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
