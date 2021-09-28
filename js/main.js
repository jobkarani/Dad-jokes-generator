const button = document.querySelector(".cont button");
const joke = document.querySelector(".cont .joke p");

document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);

async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/",{
    headers: {
        Accept: "application/json"
    }
  });

  const jokeItem =await jokeData.json();
  joke.innerHTML = jokeItem.joke;
  return jokeData;
}