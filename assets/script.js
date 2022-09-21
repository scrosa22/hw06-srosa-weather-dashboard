var button = document.querySelector(".button");
var searchValue = document.querySelector(".searchValue");
var city = "";
var cityName = document.getElementById("cityName");
var currentDesc = document.getElementById("currentDesc");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");
var currentUV = document.getElementById("currentUV");
var displaystoredcities = document.getElementById("searchHistory");
var aPIKey = "5043541d08d2d01a2a0ae76e4ef8627d";
var weeklytemp = document.getElementById("weekly1");
var weeklytemp2 = document.getElementById("weekly2");
var weeklytemp3 = document.getElementById("weekly3");
var weeklytemp4 = document.getElementById("weekly4");
var weeklytemp5 = document.getElementById("weekly5");

var iconID = document.getElementById("icon");

function displayWeather() {
  city = searchValue.value;
  searchWeather(city);
}

const searchWeather = () => {
  searchCity = searchValue.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=` +
      searchCity +
      `&appid=${aPIKey}` +
      `&units=imperial`
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data), (cityName.textContent = data.name);
      let date = new Date(data.dt * 1000).toLocaleDateString();

      var iconOBJ = data.weather[0].icon;
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` + `@2x.png`;

      cityName.innerHTML +=
        `<p>` + date + `</p>` + `<img src="${iconURL}" alt=""></img>`;

      currentDesc.textContent = "Description   " + data.weather[0].description;
      currentTemp.textContent = "Temp" + "   " + data.main.temp;
      currentWind.textContent = "Wind" + "   " + data.wind.speed;
      currentHum.textContent = "Humidity" + "   " + data.main.humidity;
      currentHum.textContent = "Humidity" + "   " + data.main.humidity;

      const lat = data.coord.lat;
      const lon = data.coord.lon;

      searchUV(lat, lon);
      weekView(lat, lon);
      storeWeather();
    });
};

const searchUV = (lat, lon) => {
  var UVquery =
    "https://api.openweathermap.org/data/2.5/uvi?appid=" +
    aPIKey +
    "&lat=" +
    lat +
    "&lon=" +
    lon;
  $.ajax({
    url: UVquery,
    method: "get",
  }).then((dataA) => {
    console.log(dataA);
    currentUV.textContent = "UV Index " + dataA.value;
  });
};

const weekView = (lat, lon) => {
  var weekquery =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    aPIKey +
    "&units=imperial";
  $.ajax({
    url: weekquery,
    method: "get",
  }).then((datab) => {
    console.log(datab);
    for (x = 0; x < 1; x++) {
      weeklytemp.innerHTML += datab.list[1].dt_txt;
            
      var iconOBJ = datab.list[1].weather[0].icon
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` +`@2x.png`

       
      
      weeklytemp.innerHTML +=`<img src="${iconURL}" alt=""></img>`+
        `<li>` + " " + datab.list[1].weather[0].description + `</li>`;
      weeklytemp.innerHTML +=
        `<li>` + "Temp  " + datab.list[1].main.temp + `</li>`;
      weeklytemp.innerHTML +=
        `<li>` + "Humidity   " + datab.list[1].main.humidity + `</li>`;
      weeklytemp.innerHTML +=
        `<li>` + "windspeed " + datab.list[1].wind.speed + `</li>`;

      weeklytemp2.innerHTML += datab.list[9].dt_txt;

      var iconOBJ = datab.list[2].weather[0].icon
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` +`@2x.png`

      weeklytemp2.innerHTML +=`<img src="${iconURL}" alt=""></img>`+
        `<li>` + datab.list[2].weather[0].description + `</li>`;
      weeklytemp2.innerHTML +=
        `<li>` + "Temp  " + datab.list[2].main.temp + `</li>`;
      weeklytemp2.innerHTML +=
        `<li>` + "Humidity   " + datab.list[2].main.humidity + `</li>`;
      weeklytemp2.innerHTML +=
        `<li>` + "windspeed " + datab.list[2].wind.speed + `</li>`;

      weeklytemp3.innerHTML += `<li>` + datab.list[17].dt_txt;

      var iconOBJ = datab.list[3].weather[0].icon
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` +`@2x.png`


      weeklytemp3.innerHTML +=`<img src="${iconURL}" alt=""></img>`+
        `<li>` + datab.list[3].weather[0].description + `</li>`;
      weeklytemp3.innerHTML +=
        `<li>` + "Temp  " + datab.list[3].main.temp + `</li>`;
      weeklytemp3.innerHTML +=
        `<li>` + "Humidity   " + datab.list[3].main.humidity + `</li>`;
      weeklytemp3.innerHTML +=
        `<li>` + "windspeed " + datab.list[3].wind.speed + `</li>`;

      weeklytemp4.innerHTML += datab.list[25].dt_txt;

      var iconOBJ = datab.list[4].weather[0].icon
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` +`@2x.png`

      weeklytemp4.innerHTML +=`<img src="${iconURL}" alt=""></img>`+
        `<li>` + datab.list[4].weather[0].description + `</li>`;
      weeklytemp4.innerHTML +=
        `<li>` + "Temp  " + datab.list[4].main.temp + `</li>`;
      weeklytemp4.innerHTML +=
        `<li>` + "Humidity   " + datab.list[4].main.humidity + `</li>`;
      weeklytemp4.innerHTML +=
        `<li>` + "windspeed " + datab.list[4].wind.speed + `</li>`;

      weeklytemp5.innerHTML += datab.list[33].dt_txt;

      var iconOBJ = datab.list[5].weather[0].icon
      var iconURL = `http://openweathermap.org/img/wn/${iconOBJ}` +`@2x.png`


      weeklytemp5.innerHTML +=`<img src="${iconURL}" alt=""></img>`+
        `<li>` + datab.list[5].weather[0].description + `</li>`;
      weeklytemp5.innerHTML +=
        `<li>` + "Temp  " + datab.list[5].main.temp + `</li>`;
      weeklytemp5.innerHTML +=
        `<li>` + "Humidity   " + datab.list[5].main.humidity + `</li>`;
      weeklytemp5.innerHTML +=
        `<li>` + "windspeed " + datab.list[5].wind.speed + `</li>`;
    }
  });
};

let storedCities = localStorage.getItem("cityList")
  ? JSON.parse(localStorage.getItem("cityList"))
  : [];

function storeWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=` +
      searchCity +
      `&appid=${aPIKey}` +
      `&units=imperial`
  )
    .then((response) => response.json())
    .then(function (dataC) {
      console.log(dataC);

      // localStorage.setItem("cityList", JSON.stringify(dataC));

      if (localStorage.getItem("cityList2") == null) {
        localStorage.setItem("cityList2", "[]");
      }
      var storedcities = JSON.parse(localStorage.getItem("cityList2"));
      storedcities.push(city);
      localStorage.setItem("cityList2", JSON.stringify(storedcities));
      if (storedcities != null) {
        for (var x = 0; x < storedcities.length; x++) {
          displaystoredcities.innerHTML +=
            `<button class=button id=button href="#" value = "${storedcities[x]}" onclick = "previousWeather(this.value)">` +
            storedcities[x].toUpperCase() +
            `</button>`;
          if (localStorage.length > 0) {
            localStorage.clear();
          }
        }
      }
    });
}

const previousWeather = (value) => {
  var previousCity = value;
  displayWeather(previousCity);
};

button.addEventListener("click", displayWeather);
