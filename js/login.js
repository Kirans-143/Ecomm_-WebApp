const loginForm = getElement("loginForm");
const signupForm = getElement("signupForm");
const showLoginButton = getElement("showLoginBtn");
const showSignupButton = getElement("showSignupBtn");
const loginUserName = getElement("loginUserName");
const loginPassword = getElement("loginPassword");
const loginButton = getElement("loginBtn");
const succErrMsg = getElement("succErrMsg");
const signupUserName = getElement("signupUserName");
const signUpPassword = getElement("signupPassword");
const signupEmail = getElement("signupEmail");
const signupButton = getElement("signupBtn");
const authErrMsg = getElement("authErrMsg");

const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";

showSignupButton.addEventListener("click", showSignup);
showLoginButton.addEventListener("click", showLogin);

signupButton.addEventListener("click", signupFn);
loginButton.addEventListener("click", loginFn);

function showSignup() {
  signupForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
}

function showLogin() {
  signupForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
}
function signupFn() {
  if (signupUserName.value == "") {
    updateAuthErrorMsg("username should not be empty");
  } else if (signUpPassword.value == "") {
    updateAuthErrorMsg("password Should not be empty");
  } else {
    const data = {
      username: signupUserName.value,
      password: signUpPassword.value,
      email: signupEmail.value,
    };
    fetch(BASE_URL + "/auth/signup", {
      methos: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
      });
  }
}
function loginFn() {}

function updateAuthErrorMsg(msg) {
  authErrMsg.innerText = msg;
}
function updateSuccErrorMsg(msg) {
  succErrMsg.innerText = msg;
}

function getElement(id) {
  return document.getElementById(id);
}
