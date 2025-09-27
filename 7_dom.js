let text = document.getElementById("text");
let button = document.getElementById("btn");

let createHeading = (document.createElement("h2").innerText =
  "i am heading added with js");

button.addEventListener("dblclick", () => {
  text.innerText = "I am from rajkot";
  document.body.append(createHeading);
  text.style.backgroundColor = "yellow";
  console.log("clicked");
});

console.log(window);

function one() {
  document.getElementById("first").style.display = "none";
}

function two() {
  document.getElementById("second").style.display = "none";
}

function three() {
  if (first.style.display == "none" && second.style.display == "none") {
    document.getElementById("third").style.display = "none";
  } else {
    document.getElementById("third").style.display = "block";
  }
}

function four() {
  document.getElementById("four").style.display = "none";
}

function five() {
  document.getElementById("first").style.display = "block";
  document.getElementById("second").style.display = "block";
  document.getElementById("third").style.display = "block";
  document.getElementById("four").style.display = "block";
}


//querySelectoe And querySelectoAll

let query = document.querySelector(".box") //first matching class element
console.log(query.textContent)

let queryAll = document.querySelectorAll(".box") // return array node list
console.log(queryAll[1].textContent)