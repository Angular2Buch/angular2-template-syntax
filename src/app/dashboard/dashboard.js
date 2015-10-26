var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var carCmp_1 = require('../car/carCmp');
var car_1 = require('../models/car');
var Dashboard = (function () {
    function Dashboard() {
        this.totalDamages = 0;
        this.cars = [
            new car_1.default('ng-car 1.0'),
            new car_1.default('ng-car 2.0'),
            null,
            undefined
        ];
    }
    Dashboard.prototype.notifyCarDamaged = function () {
        this.totalDamages++;
    };
    Dashboard = __decorate([
        angular2_1.Component({ selector: 'dashboard' }),
        angular2_1.View({
            directives: [carCmp_1.default, angular2_1.NgFor, angular2_1.NgIf],
            template: "\n    <div class=\"row\">\n      <template [ng-if]=\"totalDamages > 0\">\n        <div class=\"col-md-4\">\n          <p class=\"lead\">Reported Damages <span class=\"badge\">{{ totalDamages }}</span></p>\n        </div>\n      </template>\n    </div>\n    <div\n      *ng-for=\"#c of cars\"\n      class=\"row\">\n      <div class=\"col-md-4\">\n        <car [model]=\"c\" (damaged)=\"notifyCarDamaged($event)\" var-car></car>\n      </div>\n      <div class=\"col-md-3\">\n        <button\n          (click)=\"car.getTankCapicity()\"\n          [disabled]=\"c == null\"\n          class=\"btn btn-primary\">\n          Get tank capacity\n        </button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard);
    return Dashboard;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
//# sourceMappingURL=dashboard.js.map