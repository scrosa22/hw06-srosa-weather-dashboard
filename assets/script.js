var button = document.querySelector('.button')
var searchValue = document.querySelector('.searchValue')
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

var aPIKey = "5043541d08d2d01a2a0ae76e4ef8627d"




// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}



button.addEventListener('click', searchWeather)


function searchWeather () {
  searchCity = searchValue.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=` +searchCity+ `&appid=${aPIKey}`)
  .then(response => response.json())
  .then(data => console.log(data),
    // .catch(err => alert("wrong city name!"))  
  // cityName.innerHTML = data.name.value


  )
}

  

