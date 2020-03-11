import { BuildTemplate } from "./BuildTemplate";
/**
export function ComponentDecorator(config: Object) {

    return function <T extends { new(...constructorArgs: any[]) }>(constructorFunction: T) {
        //new constructor function
          console.log('-- decorator invoked --');
        let newConstructorFunction: any = function (...args) {
            let func: any = function () {
                return new constructorFunction(...args);
            }
            func.prototype = constructorFunction.prototype;
            let result: any = new func();
            console.log('-- decorator invoked --');
            let keys:string[] = Object.keys(config);
            keys.filter(key => 'template' != key).map(key=>func.prototype[key] = function(){
                return config[key];
            });
            keys.map(key=>func.prototype['template'] = function(){
              return BuildTemplate(config['template'],result);
            });
            return result;
        }

        newConstructorFunction.prototype = constructorFunction.prototype;


        return newConstructorFunction;
    }
}
**/

export interface  ModuleConfig {
     providers?:Function[];
     components?:Function[];
     modules?:Function[];
     boorstrap?:Function[]
}

export function ModuleDecorator (config: ModuleConfig) {
    console.log('-- decorator factory invoked --');
    return function (constructor: Function) {
        console.log('-- decorator invoked --');
        providers.map((provider)=>window['ng'+provider.name] = provider();
        let keys:string[] = Object.keys(config);
        keys.filter(key => 'template' != key).map(key=>constructor.prototype[key] = config[key]);
        constructor.prototype['template'] = function(){
          return BuildTemplate(config['template'],this);
        };
    }
}
