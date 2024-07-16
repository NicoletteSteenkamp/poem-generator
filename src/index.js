function generatePoem(event){
    event.preventDefault();

new Typewriter("#poem",{
    strings: "Nature's first green is gold,",
    autoStart: true,
    cursor:"",
    delay:1,
  });}

let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);