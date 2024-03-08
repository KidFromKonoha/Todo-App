let inp = document.querySelector(".inp");
let addbt = document.querySelector(".add");
let delet = document.querySelectorAll(".del");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
window.addEventListener("load", function (event) {
  console.log(this);
  inp.focus();
});

// delet.addEventListener("click", delLi);

function appDelBtn(el) {
  let del = document.createElement("button");
  del.innerText = "Done";
  del.classList.add("done");
  del.classList.add("btn");
  del.classList.add("btn-outline-success");
  el.appendChild(del);
  del.addEventListener("click", delLi);
}

function addTask() {
  let el = document.createElement("li");
  el.innerText = `${inp.value}`;
  inp.value = "";
  document.querySelector("ul").appendChild(el);
  appDelBtn(el);
}

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    event.target.parentElement.remove();
  } else {
    console.log("dont delete");
  }
});

function delLi() {
  console.log("removed");
  this.parentElement.remove();
}
addbt.addEventListener("click", addTask);
inp.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});
