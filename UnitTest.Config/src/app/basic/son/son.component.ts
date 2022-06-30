import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientI } from '../interfaces/client.interface';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  @Input() client?: ClientI;
  @Output() onDeleteClient = new EventEmitter();
  @Output() onClientUpdate = new EventEmitter<ClientI>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeId(id: number) {
    // if (this.client) this.client.id = id; // No usar pasa por referencia y se actualiza en el fatherComponent
    if (this.client) {
      this.client = { ...this.client, id };
      this.onClientUpdate.emit({ ...this.client });
    }
  }

  onDelete() {
    this.client = undefined;
    this.onDeleteClient.emit();
  }

}
