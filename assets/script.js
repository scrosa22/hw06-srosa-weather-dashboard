var button = document.querySelector(".button");
var searchValue = document.querySelector(".searchValue");
var city = ""
var cityName = document.querySelector(".cityName");
var currentDesc = document.getElementById("currentDesc");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHum = document.getElementById("currentHum");

var displaystoredcities = document.getElementById("searchHistory");

var aPIKey = "5043541d08d2d01a2a0ae76e4ef8627d";

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


function displayWeather () {
  
  
    city = searchValue.value;
    searchWeather(city);
  
}

const searchWeather = (city) => {
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
      (currentDesc.textContent =
        "Description   " + data.weather[0].description);
        currentTemp.textContent = "Temp" + "   " + data.main.temp;
        currentWind.textContent = "Wind" + "   " + data.wind.speed;
        currentHum.textContent = "Humidity" + "   " + data.main.humidity;
        currentHum.textContent = "Humidity" + "   " + data.main.humidity;
        
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        
        // searchUV(lat, lon);
        

        var storedcities = JSON.parse(localStorage.getItem("cityList"));
        storedcities.push(data);
        localStorage.setItem("cityList", JSON.stringify(storedcities));
        if (storedcities != null) {
          for (var x = 0; x < storedcities.length; x++) {
            // creates button for previously searched cities, clears local storage to prevent making more buttons than intended
            displaystoredcities.innerHTML +=
            `<button class= city-button id= city-button href="#" value = "${storedcities[x]}" onclick = "previousSearch(this.value)">` +
            storedcities[x].toUpperCase() +
            `</button>`;
            if (localStorage.length > 0) {
              localStorage.clear();
            }
          }
        }
      });
    }

    button.addEventListener("click", displayWeather);
    
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    
    // function searchUV() {
      //   fetch(
        //     `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${aPIKey}` +
        //       `&units=imperial`
        //   )
        //     .then((response) => response.json())
        //     .then(function (UVdata) {
          //       console.log(UVdata);
          //     });
          // }

