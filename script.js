import sampleData from "./sample-data.js";

let d = document;
let b = document.body;
let m = d.createElement("main");
let j = sampleData;
// import { createNavBar } from "./navbar.js";

b.appendChild(m);

let link = d.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "style.css";

// document.head.children.
document.head.appendChild(link);

function createH1(c, p) {
  if ((c && p) || c) {
    let newHeading = document.createElement("h3");
    newHeading.innerHTML = c;
    if (p) {
      p.appendChild(newHeading);
    } else {
      b.appendChild(newHeading);
    }
  } else {
    console.log("No arguments inputted");
  }
}

createH1("HEading 1", m);

let myObject = new Object();
myObject.name = "Danton";
myObject.age = "25";
myObject.dob = "10th of November 1994";

const myArrowFunction = (arg) => arg;
const anAddition = (a, b) => {
  a + b;
  return this;
};

const createList = (p, data) => {
  let ul = d.createElement("ul");
  console.dir(data);
  for (let i = 0; i < data.length; i++) {
    let listItem = d.createElement("li");
    listItem.innerHTML = data[i];
    ul.appendChild(listItem);
  }
  p.appendChild(ul);
};

const createListItems = (data) => {
  let listItem = d.createElement("li");
  listItem.innerHTML = data[i];
};

const createNavList = (parent) => {
  console.dir(parent);
  let navList = d.createElement("ul");
  navList.className = "nav__list";
  createList();
  parent.appendChild(navList);
};

const createNavBar = () => {
  let nav = d.createElement("nav");
  let navContainer = d.createElement("div");
  navContainer.className = "nav__inner";
  navContainer.id = "navInner";
  navContainer.style.maxWidth = "500px";
  navContainer.style.height = "100%";
  navContainer.style.margin = "0 auto";
  nav.prepend(navContainer);
  // createList(navInner, sampleData.ExampleArray);

  nav.style.width = "100%";
  nav.style.height = "100px";
  nav.style.background = "black";
  b.prepend(nav);

  let navInner = d.getElementById("navInner");
  console.dir(navInner);
  // createNavList(navInner);
};
createNavBar();

console.dir(sampleData.ExampleArray);

let ul = d.createElement("ul");
ul.className = "my-list";
m.appendChild(ul);

createList(m, sampleData.ExampleArray);
