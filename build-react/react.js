class React {
  constructor(state) {
    super();
    this.state = state;

    new Proxy(this.state, {
      set: function (obj, prop, value) {
        console.log('state changed!');
        obj[prop] = value;
        this.render();
        return true;
      }
    });
  }
}

// export { Component };
export default React;
