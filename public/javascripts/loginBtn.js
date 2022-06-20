const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector("#login-form");
const lightModeBtn = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
const title = document.querySelector("#title");
const idSpan = document.querySelector("#id_span");
const nickName = document.querySelector("#nickName");

loginForm.addEventListener("submit", (e) => {
  if (e.target.nickName.value != "") {
    e.preventDefault();
    const localId = e.target.nickName.value;
    localStorage.setItem("id", JSON.stringify(localId));

    loginBtn.addEventListener("click", () => {
      location.href = "/chatRoom.html"; // 버튼을 두 번 눌러야 이동 됌
    });
  } else {
    alert("Please enter your id");
  }
});

lightModeBtn.addEventListener("click", () => {
  window.document.body.style = "background-color : white;";
  title.style.color = "black";
  idSpan.style.color = "black";
  nickName.style = "background-color : black";
  nickName.style.color = "white";
});

darkMode.addEventListener("click", () => {
  window.document.body.style = "background-color : black;";
  title.style.color = "white";
  idSpan.style.color = "white";
  nickName.style = "background-color : white";
  nickName.style.color = "black";
  loginBtn.style.color = "black";
  loginBtn.style = "background-color : black";
});
