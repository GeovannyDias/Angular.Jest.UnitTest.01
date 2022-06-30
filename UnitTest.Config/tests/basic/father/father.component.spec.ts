import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SonComponent } from '../../../src/app/basic/son/son.component';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, SonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // -----------------------------------------------------

  test('should do match to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('should set client with name indicate', () => {
    component.onSetClient('Sofia-Test');
    fixture.detectChanges();

    const codeElm = compiled.querySelector('.mt-2');
    // console.log(codeElm?.textContent, typeof codeElm?.textContent);
    expect(codeElm?.textContent).toContain('"name"');
    expect(codeElm?.textContent).toContain('"Sofia-Test"');
  });

  test('should delete client, if emit onDeleteClient (Son)', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(SonComponent)); // Toma el componente (Son) y se tiene el control del mismo
    const sonComponent: SonComponent = sonDebugElement.componentInstance; // 
    // console.log(sonComponent.client); // le asigna valor al padre y se la pasa al hijo
    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });

  test('should update client with onClientUpdate', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(SonComponent)); // Toma el componente (Son) y se tiene el control del mismo
    const sonComponent: SonComponent = sonDebugElement.componentInstance; // 

    sonComponent.onClientUpdate.emit({ id: 10, name: 'Juan' });
    expect(component.client).toEqual({ id: 10, name: 'Juan' });

  });


});
