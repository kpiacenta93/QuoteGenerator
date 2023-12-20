/*const text = document.getElementById("quote-text");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {
    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    if (auth == null) {
        author.innerHTML = "Anonymous";
    } else {
        author.innerHTML = " ~ " + auth; // Update the author's name
    }

    text.innerHTML = quote;
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
}*/


//second button below for copy to clipboard

const quote = document.getElementById('quote-text');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json()

    quote.innerHTML = data.content
    author.innerHTML = data.author;

}

getQuote(api_url)

function copyText() {
    var copy = document.getElementById('quote-text');
    var quoteText = copy.innerHTML; // Get the inner HTML of the quote element
    navigator.clipboard.writeText(quoteText); // Copy the quote text to clipboard

    //alert("Quote has been copied: " + quoteText);
}

function shareTwitter(){
    var quoteText = document.getElementById('quote-text').innerHTML;
    var authorText = document.getElementById('author').innerHTML;

    var encodedQuote = encodeURIComponent(quoteText + ' - ' + encodedQuote);
    var twitterURL = 'https://twitter.com/intent/tweet?text=' + encodedQuote;

    window.open(twitterURL, '_blank')
}

  
  