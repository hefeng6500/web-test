function Vue (options) {
  this.$options = options;
  var data = (this._data = options.data);
  observe (data);

  for (var key in data) {
    Object.defineProperty (this, key, {
      get () {
        return this._data[key];
      },
      set (newVal) {
        this._data[key] = newVal;
      },
    });
  }
}

function observe (data) {
  return new Observe (data);
}

function Observe (data) {
  for (var key in data) {
    let val = data[key];
    Object.defineProperty (data, key, {
      enumerable: true,
      get () {
        return val;
      },
      set (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        observe (newVal);
      },
    });
  }
}
