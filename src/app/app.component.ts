import { Component } from '@angular/core';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterComponent],
  template: `<app-character></app-character>`,
})
export class AppComponent {
  title = 'extra-angular';
}
