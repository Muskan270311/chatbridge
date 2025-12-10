function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    // Simple bot response
    setTimeout(() => {
        let reply = generateReply(message);
        addMessage(reply, "bot");
    }, 500);
}

function addMessage(text, type) {
    let msgBox = document.getElementById("messages");

    let div = document.createElement("div");
    div.classList.add("message", type);
    div.innerText = text;

    msgBox.appendChild(div);
    msgBox.scrollTop = msgBox.scrollHeight; // Auto scroll
}

function generateReply(userMsg) {
    userMsg = userMsg.toLowerCase();

    if (userMsg.includes("hi") || userMsg.includes("hello")) {
        return "Hello! Welcome to ChatBridge 😊";
    }
    if (userMsg.includes("how are you")) {
        return "I'm doing great! Thanks for asking 🤖";
    }
    if (userMsg.includes("bye")) {
        return "Goodbye! See you again 👋";
    }

    return "I am ChatBridge Bot. I don't understand that yet!";
}
