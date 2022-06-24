import { Component, OnInit } from '@angular/core';
import { PokemonI } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss']
})
export class CharizardComponent implements OnInit {
  public charizard?: PokemonI;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonById();
  }

  getPokemonById() {
    this.pokemonService.getPokemonById(6).subscribe(res => {
      this.charizard = res;
      // console.log('this.charizard:', this.charizard);
    });
  }

}
