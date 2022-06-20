const socket = io();

const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("messages");
const id1 = localStorage.getItem("id");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = id1 + " : " + e.target.m.value;
  socket.emit("chat message", message);
  e.target.m.value = "";
  chatBox.appendChild(makeMessage(message, true));
});

socket.on("chat message", (message) => {
  chatBox.appendChild(makeMessage(message, true));
});

const makeMessage = (message) => {
  const msgBox = document.createElement("div");
  const classname = 'currentName';
  msgBox.className = classname;
  msgBox.innerText = message;
  return msgBox;
};
