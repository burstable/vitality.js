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
    {
      cpu: [
        { idle: 9500, total: 10300, percent: 7.7669902912621325 },
        { idle: 9500, total: 10100, percent: 5.940594059405946 },
        { idle: 8800, total: 10200, percent: 13.725490196078427 },
        { idle: 9300, total: 10000, percent: 6.999999999999995 }
      ],
      memory: { 
        free: 3688.92578125,
        total: 11835.86328125,
        percent: 31.16735715504487
      }
    }
  */
});
```

## API
### `vitality.get()`

Returns the current memory usage and cpu idle/total.

```js
/*
{
  "cpu": [
    {
      "idle": 567355500,
      "total": 674757500
    },
    {
      "idle": 333779400,
      "total": 445816600
    },
    {
      "idle": 333948500,
      "total": 439120400
    },
    {
      "idle": 338116500,
      "total": 433799200
    }
  ],
  "memory": {
    "free": 3631.984375,
    "total": 11835.86328125,
    "percent": 30.686265029384675
  }
}
*/
```

### `vitality.difference(previous, current)`

Calculates the cpu utilization between two `vitality.get()` calls. Always returns memory usage (latest).

```js
/*
{
  "memory": {
    "free": 3561.45703125,
    "total": 11835.86328125,
    "percent": 30.090386705395183
  },
  "cpu": [
    {
      "idle": 52100,
      "total": 56000,
      "percent": 6.964285714285712
    },
    {
      "idle": 52100,
      "total": 56700,
      "percent": 8.112874779541446
    },
    {
      "idle": 51600,
      "total": 56500,
      "percent": 8.672566371681413
    },
    {
      "idle": 52400,
      "total": 56500,
      "percent": 7.256637168141589
    }
  ]
}
*/
```

### `vitality.poll(interval, callback)`

Polls `vitality.get()` and returns the difference each `interval` to callback.

```js
vitality.poll(1000, function (health) {
  /*
    {
      cpu: [
        { idle: 9500, total: 10300, percent: 7.7669902912621325 },
        { idle: 9500, total: 10100, percent: 5.940594059405946 },
        { idle: 8800, total: 10200, percent: 13.725490196078427 },
        { idle: 9300, total: 10000, percent: 6.999999999999995 }
      ],
      memory: { 
        free: 3688.92578125,
        total: 11835.86328125,
        percent: 31.16735715504487
      }
    }
  */
});
```
