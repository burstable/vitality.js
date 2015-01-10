# Vitality
Easily poll the health (cpu &amp; mem) of your server

## Install

`$ npm install --save vitality-js`

## Usage

```js
var vitality = require('vitality-js');

// Will poll every 1000ms and give you current memory usage and average cpu utilization over the last 1000ms
vitality.poll(1000, function (health) {
   console.log(health);
   /*
   { cpu: 
   [ { idle: 9500, total: 10300, percent: 7.7669902912621325 },
     { idle: 9500, total: 10100, percent: 5.940594059405946 },
     { idle: 8800, total: 10200, percent: 13.725490196078427 },
     { idle: 9300, total: 10000, percent: 6.999999999999995 } ],
  memory: 
   { free: 3688.92578125,
     total: 11835.86328125,
     percent: 31.16735715504487 } }
   */
});
```

## API
