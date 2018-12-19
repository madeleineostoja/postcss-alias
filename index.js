'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-alias', function (options) {
  return function (css) {

    var aliases = typeof options.aliases  === 'object' ? options.aliases : {};

    css.walkAtRules('alias', function(rule){

      rule.walkDecls(function(decl){
        aliases[decl.prop] = decl.value;
      });

      rule.remove();

    });

    /**
     * Alias expander, takes alias data and expands to the relevant declaration/value
     * @param  {string} name The alias name
     * @param  {string} property The alias declaration/value
     */
    var expander = function(name, property){

      css.walkDecls(function(decl){

        if (decl.prop === name) {
          decl.replaceWith({ prop: property, value: decl.value, important: decl.important });
        }

      });

    };

    // Loop over and expand every alias
    for (var name in aliases) {
      expander(name, aliases[name]);
    }
  };
});
