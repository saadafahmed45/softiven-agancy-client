const fs = require('fs');

// Wrap readlinkSync to ignore EISDIR/EINVAL and return the given path as a safe fallback.
try {
  const origReadlinkSync = fs.readlinkSync.bind(fs);
  fs.readlinkSync = function (path, options) {
    try {
      return origReadlinkSync(path, options);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) {
        return path;
      }
      throw err;
    }
  };
} catch (e) {}

try {
  const origReadlink = fs.readlink.bind(fs);
  fs.readlink = function (path, options, cb) {
    if (typeof options === 'function') cb = options, options = undefined;
    return origReadlink(path, options, function (err, res) {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) return cb(null, path);
      return cb(err, res);
    });
  };
} catch (e) {}

// No exports — this module only patches fs at load time.
