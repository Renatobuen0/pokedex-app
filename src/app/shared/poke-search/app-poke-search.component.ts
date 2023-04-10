import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './app-poke-search.component.html',
  styleUrls: ['./app-poke-search.component.scss'],
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
