function displayPoem(response){
    new Typewriter("#poem",{
        strings: response.data.answer,
        autoStart: true,
        cursor:"",
        delay:1,
      });}




function generatePoem(event){
    event.preventDefault();

let instructionsInput=document.querySelector("#user-instructions");
let apiKey="ae997t30869fc345038bf7f0abaao7e6";
let context="You are a romantic poem expert,and love to write short poems,Your mission is to generate a four line poem in basic HTML and seperate each line with a <br/>,Do not include a title for the poems,Make sure to follow the user instructions.Sign at the end of each poem with Generated with SheCodes Ai in a <strong></strong> element";
let prompt=`User instructions:Generate a short poem about ${instructionsInput.value}`;
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating Poem...");
console.log(`Prompt:${prompt}`);
console.log(`Context:${context}`);

axios.get(apiUrl).then(displayPoem);}



let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);