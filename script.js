function getHelp() {
    let disaster = document.getElementById("disaster").value;
    let location = document.getElementById("location").value;

    let response = "";

    if (disaster === "Flood") {
        response = "🌊 Flood Alert!\nMove to higher ground. Avoid walking in water.";
    } 
    else if (disaster === "Earthquake") {
        response = "🌍 Earthquake!\nDrop, cover, and hold on. Stay away from windows.";
    } 
    else if (disaster === "Fire") {
        response = "🔥 Fire Emergency!\nLeave the building immediately. Do not use elevators.";
    } 
    else {
        response = "⚠️ Stay safe and follow emergency instructions.";
    }

    document.getElementById("output").innerText =
        "📍 Location: " + location + "\n\n" + response;
}
