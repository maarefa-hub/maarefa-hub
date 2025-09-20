`javascript
// chat.js
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("p");
  message.textContent = "كيف يمكنني مساعدتك اليوم؟";
  chatBox.appendChild(message);
});
`
