function passwordToggle() {
    [...document.querySelectorAll(".password")].forEach(p =>
        p.type = p.type === "password" ? "text" : "password"
      );
}