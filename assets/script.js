var button = document.querySelector(".button");
var searchValue = document.querySelector(".searchValue");
var cityName = document.querySelector(".cityName");
var currentDesc = document.getElementById("currentDesc");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");

var aPIKey = "5043541d08d2d01a2a0ae76e4ef8627d";

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


button.addEventListener("click", searchWeather);

function searchWeather() {
  searchCity = searchValue.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=` +
      searchCity +
      `&appid=${aPIKey}` +
      `&units=imperial`
  )
    .then((response) => response.json())
    .then(function (data) {
      console.log(data),

        (currentTemp.textContent = "Temp" + '   ' + data.main.temp );
        (currentWind.textContent = "Wind" + '   ' + data.wind.speed );
        (currentHum.textContent = "Humidity" + '   ' + data.main.humidity );




    });
}
