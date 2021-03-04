console.log("Client side jsss loaded");

const address = "Boston";

const menu = document.querySelector("#menu");
const titulo = document.querySelector("#titulo");
//const option = document.querySelector(".option");

menu.addEventListener("mouseover", (event) => {
  console.log("aaaaaaaaaaaa");
  titulo.style.webkitFilter = "blur(17px)";
  titulo.style.transitionDuration = "0.5s";
});
/*
option.addEventListener("mouseover", (event) => {
  console.log("eee");
  titulo.style.webkitFilter = "letter-spacing(10px)";
  titulo.style.transitionDuration = "0.5s";
});*/

menu.addEventListener("mouseleave", (event) => {
  console.log("aaaaaaaaaaaa");
  titulo.style.webkitFilter = "blur(0px)";
  titulo.style.transitionDuration = "0.5s";
});

/*
const weatherForm = document.querySelector("form");
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const url = "/weather?address=" + search.value;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error)  messageOne.textContent = data.error;
      else {
          console.log(data)
        messageOne.textContent = data.data.location;
          messageTwo.textContent = "Temperature: " + data.data.temperature +" It's Like "+ data.data.description;
        }
    });
  });
});
*/
