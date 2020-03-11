var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ComponentDecorator } from './ComponentDecorator.js';
var Card = /** @class */ (function () {
    function Card(key, value, icon, border) {
        this.key = key,
            this.value = value,
            this.icon = icon,
            this.border = border;
    }
    Card = __decorate([
        ComponentDecorator({
            htmlTag: 'card',
            template: "<!-- Card Template -->\n        <div class=\"col-xl-3 col-md-6 mb-4\">\n          <div class=\"card {{border}} shadow h-100 py-2\">\n            <div class=\"card-body\">\n              <div class=\"row no-gutters align-items-center\">\n                <div class=\"col mr-2\">\n                  <div id=\"name-1\" class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">{{key}}</div>\n                  <div id=\"value-1\" class=\"h5 mb-0 font-weight-bold text-gray-800\">{{value}}</div>\n                </div>\n                <div class=\"col-auto\">\n                  <i id=\"icon-1\" class=\"fas {{icon}} fa-2x text-gray-300\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n  <!-- Endof Card Template -->",
            myStyle: ".some{ border:1px solid;}"
        })
    ], Card);
    return Card;
}());
export { Card };
;
