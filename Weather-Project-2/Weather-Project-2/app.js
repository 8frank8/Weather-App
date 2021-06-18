const apiKey = config.apiKey;



let myForm = document.getElementById("myForm");

const cities = [];

function submitForm(event) {
    event.preventDefault();
    console.log("form subbmitted");
    let cityName = $("#cityInput").val();
    let unit = "metric";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit)
        .then(response => response.json())
        .then(data => addWeatherInfo(data))
        .catch((error) => console.log("error", error));

    let addWeatherInfo = (data) => {

        console.log(data);

        if (data.cod === "404") {
            alert("City Not Found")
        } else {
            const temp = data.main.temp;
            console.log(temp);

            const weatherDescription = data.weather[0].description;
            console.log(weatherDescription);

            var weatherInfo = document.createElement("h1");
            $(weatherInfo).text("It is currently " + weatherDescription + " and " + temp + " degrees Celcius in " + cityName)


            const icon = data.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/w/" + icon + ".png";

            var weatherIcon = document.createElement("img");
            weatherIcon.src = imageUrl;


            cities.push(weatherInfo, weatherIcon)
            console.log(cities);

            $(".container").remove();

            cities.forEach(function (cityWeather) {
                var div = document.createElement("div");
                div.className = "container";
                document.body.appendChild(div)

                div.appendChild(cityWeather);

            })
        }
        this.reset();
    }
}

myForm.addEventListener("submit", submitForm);
