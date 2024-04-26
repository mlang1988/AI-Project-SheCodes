function showSuggestions(response) {
  console.log("suggestions generated");
  new Typewriter("#response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSuggestion(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  console.log(instructionInput.value);
  let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
  let context =
    "You are an AI who knwos a lot about music and who likes to help people to find new music to listen to, always keeping in mind to follow the user instructions. Please give some additional information to each suggestion.";
  let prompt = `User instructions: Please suggest songs or musicians similar to ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating suggestions");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showSuggestions);
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generateSuggestion);
