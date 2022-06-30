import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonComponent } from '../../../src/app/basic/son/son.component';

describe('SonComponent', () => {
  let component: SonComponent;
  let fixture: ComponentFixture<SonComponent>;
  let compiled: HTMLElement; //

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement; //
    jest.clearAllMocks(); // Limpia todas las funciones de jest que han sido llamadas (reiniciar)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ---------------------------------------------------------------------------

  // Optional

  test('should do match to snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('should not show buttos, if dont exist client', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('should show buttos, if exist client', () => {
    component.client = { id: 1, name: 'Geovanny' };
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  // Optional

  test('should do match to snapshot, if exist client', () => {
    component.client = { id: 1, name: 'Geovanny' };
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  test('should emit onDeleteClient event with button of Delete Client', () => {
    component.client = { id: 1, name: 'Geovanny' };
    fixture.detectChanges();
    jest.spyOn(component.onDeleteClient, 'emit'); // Esta espiando en el componente u objeto (emit)
    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    // console.log('btnDelete1:', btnDelete?.innerHTML);
    // console.log('btnDelete2:', btnDelete?.textContent);
    btnDelete?.dispatchEvent(new Event('click'));
    // expect(component.onDeleteClient.emit).toHaveBeenCalledWith('Hello World');
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('should emit onClientUpdate event with button of "Change ID"', () => {
    component.client = { id: 1, name: 'Geovanny' };
    fixture.detectChanges();
    jest.spyOn(component.onClientUpdate, 'emit'); // Esta espiando en el componente u objeto (emit)
    const btnChangeId = compiled.querySelector('[data-test=btn-change-id]');
    // btnChangeId?.dispatchEvent(new Event('click')(5));
    btnChangeId?.dispatchEvent(new Event('click'));

    // expect(component.onClientUpdate.emit).toHaveBeenCalled();
    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({ id: 5, name: 'Geovanny' });
  });

  test('should emit onChangeClient with specific ID, if there is a client', () => {  
    jest.spyOn(component.onClientUpdate, 'emit'); // Se convierte en una funcion que es llamada, se puede verificar las veces que se llamó, etc.
    component.onChangeId(10);
    expect(component.onClientUpdate.emit).not.toHaveBeenCalled(); // SI NO hay un cliente no se ejecuta la condicion de onChangeId(10)
    
    component.client = { id: 1, name: 'Geovanny' };
    fixture.detectChanges();
    component.onChangeId(10);

    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({ id: 10, name: 'Geovanny' });
  });



});
