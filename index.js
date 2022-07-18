let quote = document.getElementById("quote");
let generate = document.getElementById("generateQuote");

function mouseListener(){
    if (!generate.classList.contains("hover")){
        generate.classList.add("hover");
    } else{
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

generate.addEventListener("mouseenter", mouseListener)

generate.addEventListener("mouseleave", mouseListener)

generate.addEventListener("click", getQuote)
