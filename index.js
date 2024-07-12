function addingEventListener() {
  const clickMe = document.querySelector("#button");
  clickMe.addEventListener("click", clickAlert);
}
function clickAlert() {
  alert("I was clicked!!");
}

addingEventListener();
