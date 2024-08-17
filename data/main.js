const jQueryUtils = require("@util.js/jquery");
jQueryUtils
  .loadjQuery({ window })
  .then(($) => console.log($))
  .catch(console.log);

$(document).ready(function() {
   $('.carousel').carousel({
     interval: 2000
   });
 })

