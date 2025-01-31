const jokeContainer = document.getElementById("joke")
 const btn = document.getElementById("btn");
 const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist";

 let getjoke = () => {
     jokeContainer.classList.remove("fade");
     fetch(url)
         .then(data => data.json())
         .then(item => {
             if (item.type === "single") {
                 jokeContainer.textContent = `${item.joke}`;
             } else if (item.type === "twopart") {
                 jokeContainer.textContent = `${item.setup} ${item.delivery}`;
             } else {
                 jokeContainer.textContent = "Api Error! Unable to load joke.";
             }
             jokeContainer.classList.add("fade");
         })
         .catch(error => {
             jokeContainer.textContent = "Api Error! Unable to load joke.";
             console.error("Erro ao carregar piada:", error);
         });
 }

 btn.addEventListener("click", getjoke);

 getjoke();