
{/* <div class="header">header</div> */}


let div = document.createElement("div");
div.setAttribute("class","header");
div.innerHTML = "<h3>Games</h3>"
document.body.append(div);



async function cat() {
    try {
        var res = await fetch("https://www.amiiboapi.com/api/amiibo/");
        var data = await res.json();
        
        var flexContainer = document.createElement("div");
        flexContainer.setAttribute("class", "flexcard");

        for (let data1 in data) {
            var game = data[data1];
            for (let i = 0; i < game.length; i++) {
                console.log(game[i]);
                var div = document.createElement("div");

                div.innerHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img src=" ${game[i].image}" class="card-img-top" alt="game...">
                        <h5 class="card-title">amiiboSeries: ${game[i].amiiboSeries}</h5>
                        <p class="card-text">name: ${game[i].name}</p>
                        <p class="card-text">character: ${game[i].character}</p>
                        <div>gameSeries: ${game[i].gameSeries}</div>
                        <p class="card-text">head: ${game[i].head}</p>
                        <p class="card-text">release: ${game[i].release.au}</p>
                    </div>
                </div>`;

                flexContainer.appendChild(div);
            }
        }
        document.body.appendChild(flexContainer);
    } catch (error) {
        console.log(error);
    }
}

cat();
