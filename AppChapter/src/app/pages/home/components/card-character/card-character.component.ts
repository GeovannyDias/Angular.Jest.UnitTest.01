import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataButtonI, MarvelI } from 'src/app/models/marvel.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {
  @Input() character?: MarvelI;
  @Output() emitButton: EventEmitter<DataButtonI> = new EventEmitter<DataButtonI>();
  constructor() { }

  ngOnInit(): void {
  }

  buttonAction(action: string, character: MarvelI) {
    const data: DataButtonI = {
      action: action,
      data: character
    }
    this.emitButton.emit(data);
  }


}
