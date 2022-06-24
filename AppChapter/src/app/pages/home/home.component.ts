import { Component, OnInit } from '@angular/core';
import { DataButtonI, MarvelI } from 'src/app/models/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataCharacters: MarvelI[] = [];
  public page: number = 0;
  public searchText: string = "";
  public isOpenForm: boolean = false;
  public action: string = 'new';
  public title: string = 'Nuevo personaje';
  public dataCharacter?: MarvelI;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    const getData = this.marvelService.getCharacters().subscribe(data => {
      getData.unsubscribe();
      this.dataCharacters = data;
      this.isOpenForm = false;
      console.log('this.dataCharacters', this.dataCharacters);
    }, error => console.log('ERROR:', error));
  }

  searchCharacter(searchTxt: string) {
    this.page = 0;
    this.searchText = searchTxt;
  }

  prevPage() {
    if (this.page > 0) this.page -= 6;
  }

  nextPage() {
    this.page += 6;
  }



  openForm(action: string) {
    this.action = action;
    this.title = 'Nuevo personaje';
    this.isOpenForm = !this.isOpenForm;
  }

  actionButton(data: DataButtonI) {
    if (data.action === 'edit') {
      this.action = 'edit';
      this.title = 'Editar personaje';
      this.dataCharacter = data.data;
      this.isOpenForm = true;
    }
    if (data.action === 'delete') {
      this.onDelete(data.data._id);
    }
  }

  onCreate(chatacter: MarvelI) {
    console.log('Create:', chatacter);
    this.marvelService.postCharacter(chatacter).subscribe(res => {
      console.log('CREATE OK', res);
      this.getCharacters();
    });

  }

  onEdit(chatacter: MarvelI) {
    console.log('Edit:', chatacter);
    this.marvelService.putCharacter(chatacter).subscribe(res => {
      console.log('EDIT OK', res);
      this.getCharacters();
    });

  }

  onDelete(id?: string) {
    this.marvelService.deleteCharacter(id).subscribe(res => {
      console.log('DELETE OK', res);
      this.getCharacters();
    });
  }


}
