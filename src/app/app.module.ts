import { NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CharacterComponent } from './app/character.component';

@NgModule({
  imports: [
    // Your module imports here
  ],
  // Remove declarations for standalone components
  providers: [],
})
export class AppModule {}

bootstrapApplication(AppComponent); // Bootstrap standalone component directly
