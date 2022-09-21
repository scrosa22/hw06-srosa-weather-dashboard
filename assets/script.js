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
var weeklytemp = document.getElementById('weekly')


function displayWeather() {
  city = searchValue.value;
  searchWeather(city);
  // searchUV(city);
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
      currentDesc.textContent = "Description   " + data.weather[0].description;
      currentTemp.textContent = "Temp" + "   " + data.main.temp;
      currentWind.textContent = "Wind" + "   " + data.wind.speed;
      currentHum.textContent = "Humidity" + "   " + data.main.humidity;
      currentHum.textContent = "Humidity" + "   " + data.main.humidity;

      // var storedcities = JSON.parse(localStorage.getItem("cityList"));
      // storedcities.push(data);
      // localStorage.setItem("cityList", JSON.stringify(storedcities));
      // if (storedcities != null) {
      //   for (var x = 0; x < storedcities.length; x++) {
      //     displaystoredcities.innerHTML +=
      //       `<button class= city-button id= city-button href="#" value = "${storedcities[x]}" onclick = "previousSearch(this.value)">` +
      //       storedcities[x] +
      //       `</button>`;
      //   }
      // }

      const lat = data.coord.lat;
      const lon = data.coord.lon;

      searchUV(lat, lon);
      weekView(lat, lon);
    });
};

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const searchUV = (lat, lon) => {
  var UVquery = "https://api.openweathermap.org/data/2.5/uvi?appid="+aPIKey+"&lat="+lat+"&lon="+lon;
  $.ajax({
    url: UVquery,
    method: "get",
  }).then((dataA) => {
    console.log(dataA);
    currentUV.textContent = "UV Index " + dataA.value
  });

 
};

const weekView = (lat, lon) => {
  var weekquery = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+aPIKey + "&units=imperial";
  $.ajax({
    url: weekquery,
    method: "get",
  }).then((datab) => {
    console.log(datab);
    for (x=0; x<5; x++)
    {
      weeklytemp.textContent = (datab.list[0])
    }
  })
}

button.addEventListener("click", displayWeather);
