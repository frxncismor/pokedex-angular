import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const components = [
  PokemonTypeComponent,
  PokemonCardComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
