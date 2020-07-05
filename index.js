const characterQuote = document.getElementById("characterQuote");
const characterImage = document.getElementById("characterImage");
const characterName = document.getElementById("characterName");
const btn = document.getElementById("btn");

const renderImg = (image) => {
  characterImage.setAttribute("src", image);
}

const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

const changeFunction = () => {
  fetch(url, {
    mode: 'cors'
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const newData = data.reduce((accum, currentValue) => {
        accum = + currentValue;
      })
      console.log(newData);
      renderImg(newData.image);
      characterQuote.textContent = `"${newData.quote}"`;
      characterName.textContent = newData.character;
    })


};

btn.addEventListener("click", () => {
  changeFunction();
})

changeFunction();


