function checkValidJson() {
    var text = document.getElementById("json-input").value;
    var valid = true;
    try {
        JSON.parse(text);
    }
    catch (e) {
        valid = false;
    }

    var message = valid ? "It's valid!" : "It's not valid.";
    document.getElementById("json-input-message").innerHTML = message;
}

function stringifyObject() {
    var myObject = {
        attribute1: "Hello World",
        isCool: true,
        hasChild: {
            child: "Yup"
        }
    };

    document.getElementById("json-output").value = JSON.stringify(myObject);
}