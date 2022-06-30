import { Component, OnInit } from '@angular/core';
import { ClientI } from '../interfaces/client.interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  public client?: ClientI;
  constructor() { }

  ngOnInit(): void {
  }

  onSetClient(name: string) {
    this.client = { id: 1, name };
  }


}
