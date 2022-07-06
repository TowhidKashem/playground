// https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component

function createElement(type, props, ...children) {
  if (typeof type === 'function') {
    const component = type({ children, props });
    children = component.props.children;
  }

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

function render(node) {
  let elem;
  if (typeof node === 'string') {
    elem = document.createTextNode(node);
  } else if (typeof node.type === 'function') {
    const component = node.type(node.props);

    if (typeof component.type === 'function') {
      elem = render(component);
    } else {
      elem = document.createElement(component.type);
    }
  } else {
    elem = document.createElement(node.type);
  }

  // Apply attributes
  for (let attr in node.props) {
    if (attr !== 'children') {
      elem.setAttribute(modifyAttribute(attr, false), node.props[attr]);
    }
  }

  if (node.props) {
    if (typeof node.props.children === 'string') {
      elem.textContent = node.props.children;
    } else {
      node.props.children.forEach((child) => {
        elem.appendChild(render(child));
      });
    }
  }

  return elem;
}
