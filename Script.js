const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const socket = new WebSocket('https://freckle-lowly-chrysanthemum.glitch.me');

socket.addEventListener('message', (event) => {
    const message = event.data;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message);
        messageInput.value = '';
    }
});


