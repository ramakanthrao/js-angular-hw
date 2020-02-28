"use strict";
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.world = function () {
        console.log('Hello, World!');
        return '';
    };
    return HelloWorld;
}());
HelloWorld.world();
