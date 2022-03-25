import React, { Component } from './react.js';

class App extends React {
  constructor() {
    super({
      a: 1,
      b: 2,
      c: 3
    });

    console.log(this.state);
  }

  render() {
    console.log('RENDER');
  }
}

const app = new App();
