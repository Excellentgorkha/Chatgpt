function chat() {
    let userInput = document.getElementById("userInput").value;
    let response = generateResponse(userInput);
    document.getElementById("response").innerText = response;
}

function generateResponse(input) {
    let replies = {
        "hello": "Hi! How can I help you?",
        "how are you": "I'm just a chatbot running in JavaScript!",
        "bye": "Goodbye! Have a great day!"
    };

    input = input.toLowerCase();
    return replies[input] || "I'm still learning. Try asking something else!";
}
