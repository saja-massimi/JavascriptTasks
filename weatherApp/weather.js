const apikey = "5b55bd0a90dbbb2772f3d676ac08622c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.getElementById("countryName");
const searchBtn = document.getElementById("searchButton");
const weatherIcon = document.querySelector("weather-icon")
async function checkWeather(city) {
    const response = await
        fetch(apiURL + `&q=${city}` + `&appid=${apikey}`).then(
            (res) => {
                return res.json();
            }).then(
                (data) => {

                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°c";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                    if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "images\clouds.png"
                    } else if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "images\clouds.png"
                    } if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "images\clouds.png"
                    }

                }).catch(
                    (e) => {
                        console.log(e);
                    })
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
