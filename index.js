var merge, request, wait;

wait = require("wait");

request = require("request");

merge = require("lodash").merge;

module.exports = function(opts, cb) {
  var cfg, track;
  cfg = {
    req: {
      uri: "/",
      timeout: 1000
    },
    spacings: 240,
    patience: 42000,
    dots: false
  };
  merge(cfg, opts);
  if (cfg.req.uri[0] === '/') {
    cfg.req.uri = "http://localhost:80" + cfg.req.uri;
  }
  track = {
    retries: 0,
    duration: cfg.patience
  };
  wait.doAndRepeat(cfg.spacings, function() {
    return request.get(cfg.req, function(err, res) {
      if (!err) {
        if (track.retries && cfg.dots) {
          console.log();
        }
        return cb(merge(res, track));
      } else {
        ++track.retries;
        if (cfg.dots) {
          return process.stdout.write('.');
        }
      }
    });
  });
  return wait.wait(cfg.patience, function() {
    if (track.retries && cfg.dots) {
      console.log();
    }
    return cb(track);
  });
};
