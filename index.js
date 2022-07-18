let quote = document.getElementById("quote");
let generate = document.getElementById("generateQuote");

function onMouseEnter(){
    if (!generate.classList.contains("hover")){
        generate.classList.add("hover");
    }
}

function onMouseLeave(){
    if (generate.classList.contains("hover")){
        generate.classList.remove("hover");
    }
}

function getQuote(){
    return fetch("https://api.quotable.io/random") 
    .then(res => {
        return res.json();
    }) .catch(err => console.log(err))
    .then(data => {
        quote.textContent = `${data.content} - ${data.author}`;
    }) .catch(err => {
        console.log(err)
        window.alert("Sorry, this request Throttled");
    })
}

generate.addEventListener("mouseenter", onMouseEnter)

generate.addEventListener("mouseleave", onMouseLeave)

generate.addEventListener("click", getQuote)
