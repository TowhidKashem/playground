// https://bigfrontend.dev/problem/Virtual-DOM-I

function modifyAttribute(attr, convert = true) {
  const attrs = convert ? { class: 'className' } : { className: 'class' };

  return attrs[attr] || attr;
}

function virtualize(elem) {
  // 3 = TEXT_NODE
  if (elem.nodeType === 3) {
    return elem.textContent;
  }

  const ast = {
    type: elem.tagName.toLowerCase(),
    props: {
      children: []
    }
  };

  // Get attributes
  for (let attr of elem.attributes) {
    ast.props[modifyAttribute(attr.name)] = attr.value;
  }

  if (elem.childElementCount === 0) {
    ast.props.children = elem.textContent;
  } else {
    for (let node of elem.childNodes) {
      ast.props.children.push(virtualize(node));
    }
  }

  return ast;
}

function render(node) {
  const elem =
    typeof node === 'string'
      ? document.createTextNode(node)
      : document.createElement(node.type);

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
