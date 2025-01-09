import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormsModule } from '@angular/forms';
import gql from 'graphql-tag';

const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!, $source: String!, $picture: String!, $description: String) {
    createCharacter(name: $name, source: $source, picture: $picture, description: $description) {
      character {
        id
        name
      }
    }
  }
`;

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [FormsModule],
  template: './character.component.html',
})
export class CharacterComponent {
  newCharacter = { name: '', source: '', picture: '', description: '' };

  constructor(private apollo: Apollo) {}

  createCharacter() {
    this.apollo.mutate({
      mutation: CREATE_CHARACTER,
      variables: { ...this.newCharacter },
    }).subscribe(() => {
      this.newCharacter = { name: '', source: '', picture: '', description: '' };
    });
  }
}
