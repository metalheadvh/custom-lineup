const container = document.getElementsByClassName("container");
const btn = document.getElementsByClassName("btn");

setTimeout(() => {
  for (let i = 0; i < container.length; i++) {
    container[i].classList.toggle("active");
  }
}, 1000);
