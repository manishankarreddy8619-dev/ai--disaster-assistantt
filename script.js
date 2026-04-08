function getHelp() {
    let disaster = document.getElementById("disaster").value;
    let location = document.getElementById("location").value;

    let chatBox = document.getElementById("output");

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = "📍 " + location + " | " + disaster;
    chatBox.appendChild(userMsg);

    let response = "";

    if (disaster === "Flood") {
        response = "🌊 Flood Alert!\n\n✅ Move to higher ground\n✅ Stay away from water\n\n❌ Do NOT walk or drive in flood water";
    } 
    else if (disaster === "Earthquake") {
        response = "🌍 Earthquake!\n\n✅ Drop, cover, and hold on\n✅ Stay indoors\n\n❌ Do NOT run outside during shaking";
    } 
    else if (disaster === "Fire") {
        response = "🔥 Fire Emergency!\n\n✅ Exit immediately\n✅ Use stairs\n\n❌ Do NOT use elevators";
    } 
    else if (disaster === "Cyclone") {
        response = "🌪️ Cyclone Alert!\n\n✅ Stay indoors\n✅ Keep emergency kit ready\n\n❌ Do NOT go outside or near trees";
    }
    else if (disaster === "Landslide") {
        response = "⛰️ Landslide Risk!\n\n✅ Move away from slopes\n✅ Stay alert\n\n❌ Do NOT stay near unstable ground";
    }
    else {
        response = "⚠️ Stay safe and follow official instructions.";
    }

    // AI thinking message
    let aiMsg = document.createElement("div");
    aiMsg.className = "message ai";
    aiMsg.innerText = "⏳ Thinking...";
    chatBox.appendChild(aiMsg);

    setTimeout(() => {
        aiMsg.innerText = "🤖 AI Advice:\n\n" + response;
    }, 1000);
}
