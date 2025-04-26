document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector(".form-container:first-child");
	const signupForm = document.querySelector(".form-container:last-child");
	const showLoginLink = document.getElementById("show-login");
	const showSignupLink = document.getElementById("show-signup");

	showSignupLink.addEventListener("click", (e) => {
	  e.preventDefault();
	  loginForm.classList.add("hidden");
	  signupForm.classList.remove("hidden");
	});
  
	showLoginLink.addEventListener("click", (e) => {
	  e.preventDefault();
	  signupForm.classList.add("hidden");
	  loginForm.classList.remove("hidden");
	});
});
