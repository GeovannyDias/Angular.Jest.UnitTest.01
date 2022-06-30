import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CouterRouteComponent } from '../../../src/app/basic/couter-route/couter-route.component';

describe('CouterRouteComponent', () => {
  let component: CouterRouteComponent;
  let fixture: ComponentFixture<CouterRouteComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [CouterRouteComponent],
  //     imports: [RouterTestingModule], // ActivatedRoute
  //   })
  //     .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CouterRouteComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


  it('should create component and initial value is cero', async () => {

    await TestBed.configureTestingModule({
      declarations: [CouterRouteComponent],
      imports: [RouterTestingModule], // ActivatedRoute
    })
      .compileComponents();

    fixture = TestBed.createComponent(CouterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.counter).toBe(0);
  });


  // -------------------------------------------------------------------------------------


  test('should has initial value to 100 in route /couter/100', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            // return '100';
            // console.log({ param });
            return (param === 'initial') ? '100' : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CouterRouteComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ], // ActivatedRoute → Con un Mock Value → Fingir el servicio 
    })
      .compileComponents();

    fixture = TestBed.createComponent(CouterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });



  // -------------------------------------------------------------------------------------


  test('should has initial value to 10 in route /couter/50asdf', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            // return '100';
            // console.log({ param });
            return (param === 'initial') ? '50asdf' : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CouterRouteComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ], // ActivatedRoute → Con un Mock Value → Fingir el servicio 
    })
      .compileComponents();

    fixture = TestBed.createComponent(CouterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });




});
