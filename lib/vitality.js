var os = require('os')
  , mb = 1024 * 1024;

var Vitality = {
  cpu: {
    get: function() {
      return os.cpus().map(function (cpu) {
        return {
          'idle': cpu.times.idle, 
          'total': cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle + cpu.times.irq
        };
      });
    },
    difference: function(previous, current) {
      if (!current) current = Vitality.cpu.get();
      return current.map(function (metrics, i) {
        var values = {
          idle: metrics.idle - previous[i].idle,
          total: metrics.total - previous[i].total
        };
        values.percent = (1 - (values.idle / values.total)) * 100;

        return values;
      });
    },
    poll: function(timing, callback) {
      var previous
        , interval
        , current
        , difference;

      interval = setInterval(function () {
        current = Vitality.cpu.get();
        if (previous) {
          callback(Vitality.cpu.difference(previous, current));
        }
        previous = current;
      }, timing);

      return function() {
        clearInterval(interval);
      };
    }
  },
  memory: {
    get: function() {
      return {
        free: os.freemem() / mb,
        total: os.totalmem() / mb,
        percent: (os.freemem() / mb) / (os.totalmem() / mb) * 100
      }
    }
  },
  get: function() {
    return {
      cpu: Vitality.cpu.get(),
      memory: Vitality.memory.get()
    };
  },
  difference: function(previous, current) {
    if (!current) current = Vitality.get();
    return {
      memory: current.memory,
      cpu: Vitality.cpu.difference(previous.cpu, current.cpu)
    }
  },
  poll: function(timing, callback) {
    return Vitality.cpu.poll(timing, function (cpu) {
      callback({
        cpu: cpu,
        memory: Vitality.memory.get()
      })
    });
  }
};

module.exports = Vitality;