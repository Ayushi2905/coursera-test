(function (window) {

    var names = ["Yakoov","John","Joe","Ayushi","Nidhi","Riya","jenny","Kriti","Paula","jacob","Fransiska"];
    for (var i in names) {
        var firstletter =((names[i]).charAt(0)).toUpperCase();

        if ((firstletter == 'j') || (firstletter == 'J')) {
        window.byee.say(names[i]);
        }
        else {
            window.hello.say(names[i]);
        }
    }
}) (window);