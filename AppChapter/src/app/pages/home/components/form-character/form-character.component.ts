import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarvelI } from 'src/app/models/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.scss']
})
export class FormCharacterComponent implements OnInit {
  @Input() action: string = '';
  @Input() title: string = '';
  @Input() character?: MarvelI;
  @Output() emitButtonForm: EventEmitter<string> = new EventEmitter<string>();

  myForm: FormGroup;
  private initForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      category: ['main'],
      idAuthor: [environment.idAuthor],
      image: ['', Validators.required],
      createdAt: [new Date],
      updatedAt: [new Date],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private marvelService: MarvelService,
  ) {
    this.myForm = this.initForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  // VALIDA LOS CAMPOS DEL FORMULARIO
  isValidField(field: string) {
    const validatedField = this.myForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' :
      validatedField?.touched ? 'is-valid' : '';
  }

  onSave() {
    const data: MarvelI = this.myForm.value;
    if (this.action === 'new') {
      this.onCreate(data);
    }
    if (this.action === 'edit') {
      this.validateEdit();
    }
  }

  onCreate(chatacter: MarvelI) {
    console.log('Edit:', chatacter);
    this.marvelService.postCharacter(chatacter).subscribe(res => {
      console.log('EDIT OK', res);
      this.emitButtonForm.emit('new');
      this.onCancel();
    });

  }

  onEdit(chatacter: MarvelI) {
    console.log('Edit:', chatacter);
    this.marvelService.putCharacter(chatacter).subscribe(res => {
      console.log('EDIT OK', res);
      this.emitButtonForm.emit('edit');
      this.onCancel();
    });

  }

  onCancel() {
    this.myForm.reset();
    this.emitButtonForm.emit('cancel');
  }

  loadData() {
    console.log('Action:', this.action);
    if (this.character) {
      this.myForm.get('title')?.setValue(this.character.title);
      this.myForm.get('body')?.setValue(this.character.body);
      this.myForm.get('image')?.setValue(this.character.image);
    } else {
      this.character = undefined;
    }
  }

  validateEdit() {
    if (this.character) {
      this.character.title = this.myForm.value.title;
      this.character.body = this.myForm.value.body;
      this.character.image = this.myForm.value.image;
      this.onEdit(this.character);
    }
  }

}
