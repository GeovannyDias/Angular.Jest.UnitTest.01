import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement; //

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement; //
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ------------------------------------ TEST ----------------------------------------

  test('should do match with snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('should increaseBy() increase in argument (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  test('should increase and decrease in 1, when button is clicked.', () => {
    const buttons = compiled.querySelectorAll('button'); // HTML → #idName, .className, []
    buttons[0].click(); // decrease (-1)
    expect(component.counter).toBe(9);

    buttons[1].click(); // increase (+1) = 10
    buttons[1].click(); // increase (+1) = 11
    buttons[1].click(); // increase (+1) = 12
    expect(component.counter).toBe(12);
  });

  test('should change counter, when update h1 tag', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20'); // Que contenga el 20 en el string o contenido del h1
  });

});
