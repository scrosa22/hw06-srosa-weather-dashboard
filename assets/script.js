var button = document.querySelector('.button')
var searchValue = document.querySelector('.searchValue')
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

var aPIKey = "5043541d08d2d01a2a0ae76e4ef8627d"

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +searchValue.value+ '&appid=c7343955075d6f22937e16261c3e17d9')
//   searchvalue {city name},{state code},{country code}
    .then(response => response.json())
    .then(data => console.log(data)
        
    //     {
    //     var nameValue = data['name']
    //     var tempValue = data['main']['temp']
    //     var descValue = data['weather']['0']['description']

    //     cityName.innerHTML = nameValue
    //     temp.innerHTML = tempValue
    //     desc.innerHTML = descValue
    // }
    
    
    )

    




    .catch(err => alert("wrong city name!"))  
})


