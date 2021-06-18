var input = document.querySelector('.input_text');
var main = document.querySelector('#location');
var temp = document.querySelector('.temp');
var description = document.querySelector('.description');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var apiKey = 'd9c4b7ac4e3e4266f00314eb0160a429';
button.addEventListener('click', name => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=imperial&appid=' + apiKey
    )
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var icon = data['weather'][0]['icon'];
            main.innerHTML = nameValue;
            description.innerHTML = "Description - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";
            img.src = 'http://openweathermap.org/img/w/' + icon + '.png';
        })
        .catch(err => alert("Wrong city name!"));
})