'use strict';

// The `react-icons` package holds many icon sets which can be imported, but we want to limit our icons to just the material design set
// otherwise there will be a design inconsistency between the icons and adding even one icon from another set will likely add the entire set to the bundle
// so this rule prevents importing from any other set besides `react-icons/md`, it also allows imports from `react-icons/lib` because that exposes generic type imports
module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        node.specifiers &&
          node.specifiers.forEach(
            ({
              loc,
              parent: {
                source: { value }
              }
            }) => {
              if (value.match(/react-icons\//)) {
                const importPath = value.split('/')[1];

                if (!['md', 'lib'].includes(importPath)) {
                  return context.report(
                    node,
                    loc,
                    `You should only import from "react-icons/md" or "react-icons/lib" NOT "${value}"`
                  );
                }
              }

              return null;
            }
          );
      }
    };
  }
};
