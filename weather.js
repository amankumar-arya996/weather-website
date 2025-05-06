    let apiKey= "54ce4082bc4248a5be92c2fe2f519bf2";//your api key
    let btn = document.querySelector("button");

    btn.addEventListener("click", async () => {
        let city = document.querySelector("input").value;
        let weatherData = await getWheather(city);
        show(city, weatherData);
    });
    
    async function getWheather(city) {
        try {
            let url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
            let res = await axios.get(url);
            return res.data.data[0]; // return full weather object
            // console.log(res.data.data[0]) ; // return full weather object

        } catch (e) {
            console.log("error", e);
            return null;
        }
    }
    
    function show(city, weather) {
        let result = document.querySelector("#result");
        if (!weather) {
            result.innerText = "Weather data not available.";
            return;
        }
    
        result.innerHTML = `
            <h3>Weather in ${city} , ${weather.country_code}</h3>
            <p><strong>Temperature:</strong> ${weather.app_temp}°C</p>
            <p><strong>Humidity:</strong> ${weather.rh}%</p>
            <p><strong>Wind Speed:</strong> ${weather.wind_spd} m/s</p>
            <p><strong>Description:</strong> ${weather.weather.description}</p>
        `;
    }
    