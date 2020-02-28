
import {ComponentDecorator} from './ComponentDecorator.js'

@ComponentDecorator({
  htmlTag:'card',
  template: `<!-- Card Template -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card {{border}} shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div id="name-1" class="text-xs font-weight-bold text-primary text-uppercase mb-1">{{key}}</div>
                  <div id="value-1" class="h5 mb-0 font-weight-bold text-gray-800">{{value}}</div>
                </div>
                <div class="col-auto">
                  <i id="icon-1" class="fas {{icon}} fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  <!-- Endof Card Template -->`,
  myStyle:`.some{ border:1px solid;}`
})
export class Card {
  private key: string;
  private value: any;
  private icon: string;
  private border: string;
  constructor(key:string,value:any,icon:string,border:string){
    this.key = key,
    this.value = value,
    this.icon = icon,
    this.border = border;
  }
};
