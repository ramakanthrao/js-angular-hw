'use strict';

var assert = require('assert');
var tasks = require('../src/js-array');

describe('HW-01: Arrays: ', function() {

    it('doubleArray should return the specified array twice', function () {
        [
            {
                arr: ['Ace', 10, true],
                expected: ['Ace', 10, true,   'Ace', 10, true]
            },{
                arr: [0, 1, 2, 3, 4, 5],
                expected: [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
            },{
                arr: [],
                expected: []
            }
        ].forEach(data => {
            var actual = tasks.doubleArray(data.arr);
            assert.deepEqual(
                data.expected,
                actual,
                `The result of doubling [${data.arr}] is not correct`
            );
        });
    });

    it('removeFalsyValues should return the specified array without falsy values', function () {
        [
            {
                arr:      [ 0, false, 'cat', NaN, true, '' ],
                expected: [           'cat',      true     ]
            },{
                arr:      [ 1, 2, 3, 4, 5, 'false' ],
                expected: [ 1, 2, 3, 4, 5, 'false' ]
            },{
                arr:      [ false, 0, NaN, '', undefined ],
                expected: [                              ]
            }
        ].forEach(data => {
            var actual = tasks.removeFalsyValues(data.arr);
            assert.deepEqual(
                data.expected,
                actual
            );
        });
    });

    it('insertItem should insert an item at specified position', function () {
        [
            {
                arr:      [ 1,    3, 4, 5 ],
                item:          2,
                index:    1,
                expected: [ 1, 2, 3, 4, 5 ]
            },{
                arr:      [      1, 'b', 'c' ],
                item:       'x',
                index:    0,
                expected: [ 'x', 1, 'b', 'c' ]
            }
        ].forEach(data => {
            tasks.insertItem(data.arr, data.item, data.index);
            assert.deepEqual(
                data.expected,
                data.arr
            );
        });
    });

    it('getItemsSum should return the sum of all items of numbers array', function () {
        [
            {
                arr:      [  ],
                expected: 0
            },{
                arr:      [ 1, 2, 3 ],
                expected: 6
            },{
                arr:      [ 1, 10, 100, 1000 ],
                expected: 1111
            }
        ].forEach(data => {
            var actual = tasks.getItemsSum(data.arr);
            assert.deepEqual(
                data.expected,
                actual,
                `Test failed for [${data.arr}]`
            );
        });
    });

    it('Functions from js-array.js should not use basic loops statements', function () {
        Object.getOwnPropertyNames(tasks)
              .filter(x => tasks[x] instanceof Function)
              .forEach(f => {
                  assert(
                      !/([;{]\s*(for|while)\s*\()|(\.forEach\s*\()/.test(tasks[f].toString()),
                      `Function "${f}" should not use basic loop statements (for, while or Array.forEach)! Please use specialized array methods (Array.map, Array.reduce etc).`
                  );
              });
    });
     
});
