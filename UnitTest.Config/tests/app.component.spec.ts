import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // it() es el alias de test(), misma funcionalidad (legibilidad)

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'UnitTest.Config'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const component = fixture.componentInstance;
    // const method = component.increase();
    expect(component.title).toEqual('UnitTest.Config');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('UnitTest.Config app is running!');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance; // Hacer global

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');

    expect(h1?.textContent).toContain(component.title);
  });


  // SNAPSHOT (Copy render) - (Update press `u` or delete folder __snapshots__)

  test('Should do match with Snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Refresca los cambios
    const compiled = fixture.nativeElement as HTMLElement; // Componente compilado

    // expect(compiled).toMatchInlineSnapshot(); // Crea el componente en este fichero
    expect(compiled).toMatchSnapshot(); // Crea una replica del componente el la carpeta __snapshots__
  });


});
