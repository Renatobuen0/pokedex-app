import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeHeaderComponent } from './poke-header/app-poke-header.component';
import { PokeSearchComponent } from './poke-search/app-poke-search.component';
import { PokeListComponent } from './poke-list/app-poke-list.component';

//Components

@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
