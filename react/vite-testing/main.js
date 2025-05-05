const myName = "Thu Htet Naing";
const app = document.querySelector("#app");
const showMyName = function(name) {
  console.log(name);
  app.innerText = name;
}

showMyName(myName);