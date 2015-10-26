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
var car_1 = require('../models/car');
var CarCmp = (function () {
    function CarCmp() {
        this.damaged = new angular2_1.EventEmitter();
    }
    CarCmp.prototype.rockfall = function () {
        this.model.hasDamage = true;
        this.damaged.next(this.model);
    };
    CarCmp.prototype.getTankCapicity = function () {
        this.model.tankCapacity -= 5;
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', car_1.default)
    ], CarCmp.prototype, "model");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], CarCmp.prototype, "damaged");
    CarCmp = __decorate([
        angular2_1.Component({ selector: 'car' }),
        angular2_1.View({
            template: "\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">ID {{ model?.id | uppercase }}</div>\n    <table class=\"table table-striped\">\n      <tr\n        [class.success]=\"model?.hasDamage == false\"\n        [class.danger]=\"model?.hasDamage == true\">\n        <td>Damaged</td>\n        <td>{{ model?.hasDamage }}</td>\n      </tr>\n      <tr\n        [class.warning]=\"model?.tankCapacity < 60\"\n        [class.danger]=\"model?.tankCapacity < 20\">\n        <td>Tank Capacity</td>\n        <td>{{ model?.tankCapacity }}</td>\n      </tr>\n      <tr>\n        <td>Driver {{ model?.driver }}</td>\n        <td>\n        <input\n          [value]=\"model?.driver\"\n          [disabled]=\"model == null\"\n          (input)=\"model.driver=$event.target.value\"\n          class=\"form-control\"\n          placeholder=\"Insert driver...\">\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <button\n            (click)=\"rockfall()\"\n            [disabled]=\"model == null\"\n            class=\"btn btn-danger\">\n            Report rockfall\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CarCmp);
    return CarCmp;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CarCmp;
//# sourceMappingURL=carCmp.js.map