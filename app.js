const quoteEl = document.querySelector(".quote_text span"),
  actorEl = document.querySelector(".actor .author"),
  volumeEl = document.querySelector(".volume"),
  copyEl = document.querySelector(".copy"),
  twitterEl = document.querySelector(".twitter"),
  newQuote = document.querySelector(".btn_new_quote");

const randomQuote = () => {
  newQuote.innerText = "Quote Downlod";
  newQuote.classList.add("active");
  let apiQuote = `https://api.quotable.io/random`;
  fetch(apiQuote)
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      newQuote.innerText = "New Quote";
      newQuote.classList.remove("active");
      ("active");
      let { content, author } = result;
      // console.log(content, author);
      quoteEl.innerText = content;
      actorEl.innerText = author;
    });
};

randomQuote();

newQuote.addEventListener("click", randomQuote);

volumeEl.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    quoteEl.innerText + " by " + actorEl.innerText
  );
  speechSynthesis.speak(utterance);
});

copyEl.addEventListener("click", () => {
  copyEl.className = "fa-solid fa-check copy";
  setTimeout(() => (copyEl.className = "fa-solid fa-copy copy"), 1000);
  navigator.clipboard.writeText(quoteEl.innerText);
});

twitterEl.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteEl.innerText}`;
  window.open(twitterUrl, "_blank");
});
