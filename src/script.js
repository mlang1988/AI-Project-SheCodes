function generateSuggestion(event) {
  event.preventDefault();

  new Typewriter("#response", {
    strings:
      "Among the most popular songs of the Beatles are: All you need is love, Yellow Submarine and Let it be",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generateSuggestion);
