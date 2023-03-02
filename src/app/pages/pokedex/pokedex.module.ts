import { PokedexComponent } from './pokedex.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ]
})
export class PokedexModule { }
