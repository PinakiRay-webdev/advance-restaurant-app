const signUp = document.getElementById("signupForm");

if (signUp) {
  signUp.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("User data saved to local storage!");
  });
}
