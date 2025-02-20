// Customize-cra react-app-rewired
// npm i customize-cra react-app-rewired -D
/* config-overrides.js */

const {override, useBabelRc} = require("customize-cra");
  
module.exports = override(
    useBabelRc() // Allows you to use.babelrc file
);