// https://bigfrontend.dev/problem/virtual-dom-II-createElement

function createElement(type, props, ...children) {
  const elem = {
    type,
    props: {
      children: [...children]
    }
  };

  for (let prop in props) {
    elem.props[prop] = props[prop];
  }

  return elem;
}
