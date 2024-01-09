//variables 
let bn = document.querySelector(".genbutton");
let quote = document.querySelector(".quote");
let author= document.querySelector(".author");

const quotes = [
  {quote: "The only way to do great work is to love what you do", author:"Steve Jobs"},
  { quote: "The future belongs to those who believe in the beauty of their dreams." , author: "Eleanor Roosevelt" },
  { quote:"It does not matter how slowly you go as long as you do not stop.", author:"Confucius"},
  {quote:"In order to write about life first you must live it." , author:"Ernest Hemingway"},
  {quote:"The purpose of our lives is to be happy." , author: "maina" }

];

bn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
}    );