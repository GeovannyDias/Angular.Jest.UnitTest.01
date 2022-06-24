import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { FormCharacterComponent } from './components/form-character/form-character.component';
const myComponents = [
  CardCharacterComponent,
  SearchComponent,
  FormCharacterComponent,
];
@NgModule({
  declarations: [myComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [myComponents]
})
export class ComponentsModule { }
