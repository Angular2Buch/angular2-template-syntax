import { Component, View , Input, Output, EventEmitter } from 'angular2/angular2';

@Component({ selector: 'car' })
@View({
  template: `
  <div class="panel panel-default">
  <div class="panel-heading">ID {{ id | uppercase }}</div>
    <table class="table table-striped">
      <tr
        [class.warning]="tankCapacity < 60"
        [class.danger]="tankCapacity < 20">
        <td>Tank Capacity</td>
        <td>{{ tankCapacity }}</td>
      </tr>
      <tr>
        <td>Change ID</td>
        <td>
        <input
          [value]="id"
          (input)="id=$event.target.value"
          class="form-control"
          placeholder="Insert driver...">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button
            class="btn btn-danger"
            (click)="rockfall()">
            Report rockfall
          </button>
        </td>
      </tr>
    </table>
  </div>
  `
})
export default class CarComponent {
  @Input() id: string;
  @Input() tankCapacity: number;
  @Output() damaged: EventEmitter = new EventEmitter();

  rockfall() {
    this.damaged.next(this.id);
  }

  getTankCapicity() {
    this.tankCapacity = Math.floor(Math.random() * 100);
  }
}
