const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const selTowns = []
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs"
        || towns[i].name == "Fish Haven" ){
        selTowns.push(towns[i]);
        }
    }
   console.log(selTowns);

    selTowns.forEach(makeCards);
      
    function makeCards(selTowns){
      let card = document.createElement('section');
      let div = document.createElement('div');
      let pic = document.createElement('picture');
      let townName = document.createElement('h2');
      let motto = document.createElement('h4');
      let yearFounded = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let img = document.createElement('img')

      img.setAttribute('src', `images/home/${selTowns.photo}`);
      townName.textContent = selTowns.name;
      motto.textContent = selTowns.motto;
      yearFounded.textContent = 'Year Founded: ' + selTowns.yearFounded;
      population.textContent = 'Population: ' + selTowns.currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + selTowns.averageRainfall;

      card.appendChild(div);   
      div.appendChild(townName);
      div.appendChild(motto);
      div.appendChild(yearFounded);
      div.appendChild(population);
      div.appendChild(rainfall);
      card.appendChild(pic);
      pic.appendChild(img);
      
      document.querySelector("div.card").appendChild(card);

  }});
 