(function (window) {
    var hello = {};
    var word = "hello";
    hello.say = function (name) {
        console.log(word + " " + name);
    }
    window.hello = hello;
}) (window);