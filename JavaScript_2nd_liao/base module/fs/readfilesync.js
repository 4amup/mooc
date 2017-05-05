'use strict'

var fs = require('fs');

try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log('似乎哪里有问题，但我不告诉你')
}