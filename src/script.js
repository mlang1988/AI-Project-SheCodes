function showSuggestions(response) {
  new Typewriter("#response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "🎵",
  });
}

function generateSuggestion(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  console.log(instructionInput.value);
  let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
  let context =
    "You are an AI who knows a lot about music and who likes to help people to find new and unusual music to listen to, always keeping in mind to follow the user instructions. Always start with the <h1> 'Music Tips for fans of instructionInput.value' Craft a list of 5 music tips in basic HTML format and give additional information and song tips to each tip. Use bullet points and no stars.";
  let prompt = `User instructions: Please suggest songs or musicians similar to ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let suggestionElement = document.querySelector("#response");
  suggestionElement.classList.remove("hidden");
  suggestionElement.innerHTML = `<div class="generating">⏳ Findining new music similar to ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(showSuggestions);
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generateSuggestion);
