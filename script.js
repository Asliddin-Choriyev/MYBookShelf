//============================================================================================ UNIVERSAL FUNCTIONS
// replace Page function
function replacePage(hidingPage, visiblePage) {
  hidingPage.classList.add("hidden");
  visiblePage.classList.remove("hidden");
}

// ============================  Pages
const registerPage = document.querySelector(".register");
const loginPage = document.querySelector(".login");

// ========================================= LOGIN SECTION LOGICS ===============================================
// show and hide password
function LoginShowPassword() {
  const showPasswordIcon = document.querySelector(".show");
  const hidePasswordIcon = document.querySelector(".hide");
  showPasswordIcon.classList.add("hidden");
  const passwordInput = document.getElementById("email_password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.classList.remove("hidden");
    hidePasswordIcon.classList.add("hidden");
    showPasswordIcon.addEventListener("click", () => {
      showPasswordIcon.classList.add("hidden");
      hidePasswordIcon.classList.remove("hidden");
      passwordInput.type = "password";
    });
  } else {
    passwordInput.type = "password";
  }
}

// checkbox style
function checkboxStyle() {
  const checkbox = document.getElementById("remember-checkbox");
  checkbox.addEventListener("click", () => {
    checkbox.style.accentColor = "red";
  });
}

// Welcome Container to main Container
const welcomeContain = document.querySelector(".welcome-contain");
const container = document.querySelector(".container");
const homePage = document.querySelector(".home");
setTimeout(replacePage, 2500, welcomeContain, container);

// Register Page to Login Page
const toLoginBtn = document.getElementById("toLogin");
toLoginBtn.addEventListener("click", () => {
  setTimeout(replacePage, 1000, registerPage, loginPage);
});
// Login Page to Register Page
const toRegisterBtn = document.getElementById("toRegister");
toRegisterBtn.addEventListener("click", () => {
  setTimeout(replacePage, 1000, loginPage, registerPage);
});

// ================================== CHECK ALL REGISTER INPUTS =======================
function checkRegisterInputs() {
  // userName checker
  const userName = document.getElementById("userName");
  userName.addEventListener("input", () => {
    if (userName.value.length > 2) {
      const username = document.querySelector(".userName");
      username.textContent = userName.value;
      userName.style.outline = "2px solid greenyellow";
    } else {
      userName.style.outline = "2px solid red";
    }
  });
  //  email checker
  const email = document.getElementById("newEmail");
  email.addEventListener("input", () => {
    if (checkEmail(email.value)) {
      email.style.outline = "2px solid greenyellow";
    } else {
      email.style.outline = "2px solid red";
    }
  });

  // ========= passwords checkers
  const newPassword = document.getElementById("new_password");
  const confirmPassword = document.getElementById("confirm_password");
  // new password checker
  newPassword.addEventListener("input", () => {
    if (checkPassword(newPassword.value)) {
      newPassword.style.outline = "2px solid  greenyellow";
      if (confirmPassword.value === newPassword.value) {
        confirmPassword.style.outline = "2px solid  greenyellow";
      } else {
        confirmPassword.style.outline = "2px solid  red";
      }
    } else {
      newPassword.style.outline = "2px solid red";
    }
  });
  // confirm password checker
  confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value === newPassword.value) {
      confirmPassword.style.outline = "2px solid  greenyellow";
    } else {
      confirmPassword.style.outline = "2px solid  red";
    }
  });
}

// needful Functions

const checkEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const checkPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  // check
  return regex.test(password);
};

// ===== show passwords at RegisterPage
function RegisterShowPassword() {
  const showPasswordCheckbox = document.getElementById("showRegisterPassword");
  showPasswordCheckbox.addEventListener("change", () => {
    const checked = showPasswordCheckbox.checked;
    const newPassword = document.getElementById("new_password");
    const confirmPassword = document.getElementById("confirm_password");
    if (checked) {
      newPassword.type = "text";
      confirmPassword.type = "text";
    } else {
      newPassword.type = "password";
      confirmPassword.type = "password";
    }
  });
}

// ================================= Start Checking
function checkInputs() {
  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const newPassword = document.getElementById("new_password").value.trim();
  const confirmPassword = document
    .getElementById("confirm_password")
    .value.trim();

  if (userName && email && newPassword && confirmPassword) {
    replacePage(registerPage, homePage);
  } else {
    const errorScreen = document.querySelector(".error-screen");
    errorScreen.classList.remove("hidden");
    const input = document.querySelector("input");
    input.addEventListener("click", () => {
      errorScreen.classList.add("hidden");
    });
  }
}
function checkLoginInputs() {
  //  email checker
  const email = document.getElementById("email");
  email.addEventListener("input", () => {
    if (checkEmail(email.value)) {
      email.style.outline = "2px solid greenyellow";
    } else {
      email.style.outline = "2px solid red";
    }
  });
  // ========= passwords checkers
  const emailPassword = document.getElementById("email_password");
  // new password checker
  emailPassword.addEventListener("input", () => {
    if (checkPassword(emailPassword.value)) {
      emailPassword.style.outline = "2px solid  greenyellow";
    } else {
      emailPassword.style.outline = "2px solid red";
    }
  });
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    checktrueEmail();
  });
  function checktrueEmail() {
    const email = document.getElementById("email").value.trim();
    const emailPassword = document
      .getElementById("email_password")
      .value.trim();
    if (email && emailPassword) {
      setTimeout(replacePage, 1000, loginPage, homePage);
    } else {
      const errorScreen = document.querySelector(".error-screen-login");
      errorScreen.classList.remove("hidden");
      const input = document.querySelector("#email");
      input.addEventListener("click", () => {
        errorScreen.classList.add("hidden");
      });
    }
  }
}

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", () => {
  checkInputs();
});

// ============================ VERIFICATION
// code
// code
// code
// code
// code
// code
// code
// ========================== NAVBAR / time
function setTimeToMenu() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  let day = date.getDate();
  let timeForm;
  const timeTablo = document.querySelector(".hour>p");
  const dayTablo = document.querySelector(".day>p");
  if (minute < 10 && minute >= 0) {
    minute = `0${minute}`;
  }
  if (hour < 10 && hour >= 0) {
    hour = `0${hour}`;
  }
  if (hour > 0 && hour < 13) {
    timeForm = "AM";
  } else {
    timeForm = "PM";
  }
  timeTablo.innerHTML = `${hour}:${minute} ${timeForm}`;
  dayTablo.innerHTML = `${day}-${month.slice(0, 3)}-${year}`;
}
setInterval(setTimeToMenu, 500);
// ========================== User Settings
function DropDown() {
  const ddown = document.querySelector(".user-box");
  const downBtn = document.getElementById("downIcon");
  downBtn.style.cursor = "pointer";
  const downMenu = document.querySelector(".user-box>.menues");
  ddown.addEventListener("click", () => {
    downBtn.style.transform = "rotate(-90deg)";
    downMenu.style.left = "40px";
    downMenu.style.transform = "translate(1%, -1%)";
    function menuHider() {
      downMenu.style.transform = "translate(170%, -170%)";
      downBtn.style.transform = "rotate(360deg)";
    }
    setTimeout(menuHider, 5000);
  });
}
// ========================== QUOTES SLIDE

function SliderQuotes() {
  const quote = document.querySelectorAll(".quote");
  setTimeout(replacePage, 10000, quote[0], quote[1]);
  setTimeout(replacePage, 20000, quote[1], quote[2]);
  setTimeout(replacePage, 30000, quote[2], quote[3]);
  setTimeout(replacePage, 40000, quote[3], quote[0]);
}

// ======================= LogOut
function logOut() {
  const LogOutBtn = document.getElementById("logOutBtn");
  LogOutBtn.addEventListener("click", () => {
    replacePage(homePage, loginPage);
  });
}

// ==============================  Call the Function
checkboxStyle();
RegisterShowPassword();
checkRegisterInputs();
checkLoginInputs();
setTimeToMenu();
DropDown();
setInterval(SliderQuotes, 5000);
logOut();
