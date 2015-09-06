'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-alias', function () {
  return function (css) {

    // Build array of aliases
    var aliases = [];
    css.walkAtRules('alias', function(rule){

      rule.walkDecls(function(decl){
        aliases.push({ name: decl.prop, property: decl.value });
      });

      // Remove @alias when we're done
      rule.remove();

    });

    /**
     * Alias expander, takes an alias and expands to the relevant decleration/value
     * @param  {string} alias the alias to expand
     */
    var expander = function(alias){

      // Look for the alias in each decl
      css.walkDecls(function(decl){

        // Check decleration property
        if (decl.prop === alias.name) {
          decl.replaceWith({ prop: alias.property, value: decl.value, important: decl.important });
        }

        // Check decleration value
        if (decl.value.indexOf(alias.name) > -1) {
          var aliasRegex = new RegExp('\\b(\\(|:)?(' + alias.name + ')(\\(|:)?\\b');
          decl.value = decl.value.replace(aliasRegex, alias.property);
        }

      });

    };

    // Loop over and expand every alias
    aliases.forEach(expander);

  };
});
