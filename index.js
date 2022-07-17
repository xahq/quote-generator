let quote = document.getElementById("quote");
let generate = document.getElementById("generateQuote");

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

generate.addEventListener("click", getQuote)
