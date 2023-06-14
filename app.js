const subscribe = document.querySelector(".subscribe");
const form = document.querySelector(".updated-form");
const success = document.querySelector(".success-message");
const dismiss = document.querySelector(".dismiss");
const label = document.querySelector(
  ".updated-form > .text > label > span:nth-child(2)"
);
const input = document.querySelector(".updated-form > .text > input");

function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return pattern.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

subscribe.addEventListener("click", () => {
  const emailText = document.querySelector(
    ".updated-form > .text > input"
  ).value;
  console.log(emailText);

  if (validateEmail(emailText)) {
    success.classList.add("show");
    document.body.classList.add("show");
    label.classList.remove("show");
    input.classList.remove("show");
    setTimeout(() => {
      success.classList.remove("show");
      document.body.classList.remove("show");
    }, 2000);
  } else {
    label.classList.add("show");
    input.classList.add("show");
  }
});
dismiss.addEventListener("click", () => {
  success.classList.remove("show");
  document.body.classList.remove("show");
});
