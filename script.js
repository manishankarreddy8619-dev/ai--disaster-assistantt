function getHelp() {
    let location = document.getElementById("location").value;
    let disaster = document.getElementById("disaster").value;

    let message = "🚨 Stay safe during " + disaster + " in " + location;

    document.getElementById("output").innerText = message;
}
