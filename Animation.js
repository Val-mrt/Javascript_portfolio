// Selecteurs
const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const paragraphs = document.querySelectorAll("p");

console.log(button, h1, h2, paragraphs);

// Evenements
button.addEventListener("click",  function() {
    if (h1.style.color === "red")  {

        h1.style.color = "green";
        h2.forEach(x => x.style.color = "green");
        paragraphs.forEach(x => x.style.color = "green");

    }
    else {
        h1.style.color = "red";
        h2.forEach(x => x.style.color = "red");
        paragraphs.forEach(x => x.style.color = "red");
    }
});


// Selecteurs
const body = document.querySelector("body");
const bodyNight = document.querySelector("bodyNight");
const bouton = document.querySelector(".btnNuit");

// Evenements
    btnNuit.addEventListener("click", function() {
    body.classList.toggle("bodyNight");
})


// Selecteurs
const button1 = document.querySelector("#btn1");
const list = document.querySelector("#list");

console.log(list)

// Evenements
button1.addEventListener("click", function(){
    const li = document.createElement("li");
    const texte = document.createTextNode("France>>Angleterre");

    li.append(texte);
    list.append(li);
}) 