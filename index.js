'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-alias', function () {
  return function (css) {

    // Build array of aliases
    var aliases = [];
    css.eachAtRule('alias', function(rule){

      rule.eachDecl(function(decl){
        aliases.push({ name: decl.prop, property: decl.value });
      });

      // Remove @alias when we're done
      rule.removeSelf();

    });

    // Build the alias expander
    var expander = function(alias){

      css.eachDecl(alias.name, function(decl){


        // Clone to expanded rule, then remove alias version
        decl.cloneBefore({ prop: alias.property, value: decl.value });
        decl.removeSelf();

      });

    };

    // Loop over and expand every alias
    aliases.forEach(expander);

  };
});
