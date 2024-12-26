let body = document.querySelector('body');
body.style.backgroundColor = prompt('Fon rangini kiriting');
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.height = "100vh";
body.style.alignItems = "center";

let word = document.createElement('h1');
word.textContent = prompt('Ismingizni kiriting');
word.style.color = prompt('Rangni kiriting');
word.style.fontSize = "100px";




body.appendChild(word);