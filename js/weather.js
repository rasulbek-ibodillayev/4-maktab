'use strict';
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const api = 
    {
        key: 'd2f4eb0f156b0dfb4a519502eb5ab0ae',
        baseUrl: 'https://api.openweathermap.org/data/2.5/'
        //weather?lat={lat}&lon={lon}&appid={API key}
    }
    var lat, long;
     navigator.geolocation.getCurrentPosition((position) => 
      {
        
        lat = position.coords.latitude;
        long = position.coords.longitude;
         //fetch(`${api.baseUrl}weather?lat=${lat}&lon=${long}&appid=${api.key}`)
        fetch(`${api.baseUrl}weather?q=Namangan&appid=${api.key}`)
        .then((weather) => 
        {
            return weather.json();
        })
        .then(displayWeather);
      });


    function displayWeather(weather)
    {
      let date = new Date();
      document.querySelector('#weatherCity').textContent = weather.name + " / " + weather.sys.country;
      document.querySelector('#weatherInfo').textContent = date.getDate() + "/"+ (date.getMonth() + 1) + "/" + date.getFullYear() + " Hozir:" + Math.ceil(weather.main.temp - 273.15) + "°C";
      document.querySelector('#weatherMiddle').textContent = "max:" + Math.ceil(weather.main.temp_max - 273.15) + "°C"
      + " / " + " min:" + Math.ceil(weather.main.temp_min - 273.15) + '°C';
    }
});