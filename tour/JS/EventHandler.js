AFRAME.registerComponent('menuVisible', {
  schema: {
    eventN: {type: 'string', default: ''}
  },

  init: function () {
    var self = this;
    // this.eventHandlerFn = function () { console.log(self.data.eventN); }
    // console.log(this.data.eventN);
    console.log('event component init');
  },

  update: function () {
    console.log('update');
  }
});

AFRAME.registerComponent('hello-world', {
  schema: {
  },
  init: function () {
    console.log('Hello, World!');
  }
});