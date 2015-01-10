# Vitality
Easily poll the health (cpu &amp; mem) of your server

## Install

`$ npm install --save vitality-js`

## Usage

```js
var vitality = require('vitality-js');

vitality.get();
/*
{ cpu: 
   [ { idle: 564339600, total: 671326100 },
     { idle: 330730600, total: 442383400 },
     { idle: 330922400, total: 435680500 },
     { idle: 335031900, total: 430367700 } ],
  memory: 
   { free: 3623.29296875,
     total: 11835.86328125,
     percent: 30.612832225680624 } }
*/
```
