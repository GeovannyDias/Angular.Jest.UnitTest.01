import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-couter-route',
  templateUrl: './couter-route.component.html',
  styles: [
  ]
})
export class CouterRouteComponent implements OnInit {
  public counter: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.counter = this.route.snapshot.params['initial'];
    const initial = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initial) ? 10 : initial;
    // console.log('this.counter: ', { counter: this.counter, initial });

  }

  increaseBy(value: number) {
    this.counter += value;
  }

}
