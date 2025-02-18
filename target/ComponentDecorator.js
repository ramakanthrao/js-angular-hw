import { BuildTemplate } from "./BuildTemplate.js";
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
export function ComponentDecorator(config) {
    console.log('-- decorator factory invoked --');
    return function (constructor) {
        console.log('-- decorator invoked --');
        var keys = Object.keys(config);
        keys.filter(function (key) { return 'template' != key; }).map(function (key) { return constructor.prototype[key] = config[key]; });
        constructor.prototype['template'] = function () {
            return BuildTemplate(config['template'], this);
        };
    };
}
