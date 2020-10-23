(function (window) {
     var byee = {};
     var word = "Goodbye";
     byee.say = function (name) {
         console.log(word + " " + name);
     }
     window.byee = byee;
}) (window);