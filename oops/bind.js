class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:3000";

    const button = document.querySelector(".btn");
    button.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("Button clicked");
    console.log(this.server);
  }
}

const clicked = new React();
