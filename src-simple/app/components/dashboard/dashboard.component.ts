import { Component, View } from 'angular2/core';
import CarComponent from '../car/car.component';

@Component({ selector: 'dashboard' })
@View({
  directives: [CarComponent],
  template: `
    <div class="row">
      <template [ngIf]="totalDamages > 0">
        <div class="col-md-4">
          <p class="lead">Reported Damages <span class="badge">{{ totalDamages }}</span></p>
        </div>
      </template>
    </div>
    <div class="row">
      <div class="col-md-4">
        <car [id]="id" [tankCapacity]="tankCapacity" (damaged)="notifyCarDamaged($event)" var-car></car>
      </div>
      <div class="col-md-3">
        <button
          (click)="car.getTankCapicity()"
          class="btn btn-primary">
          Get tank capacity
        </button>
      </div>
    </div>
  `
})
export default class DashboardComponent {
  id: string;
  tankCapacity: number;
  totalDamages: number;

  constructor() {
    this.id ='ng-car 1.0';
    this.tankCapacity=100;
    this.totalDamages = 0;
  }

  notifyCarDamaged() {
    this.totalDamages++;
  }
}
