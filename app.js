window.addEventListener("load", () => {
  let lat;
  let lon;

  let valorTemp = document.getElementById("valorTemp");
  let descTemp = document.getElementById("descTemp");

  let ubicacion = document.getElementById("ubicacion");
  let animado = document.getElementById("animado");

  let velocViento = document.getElementById("velocViento");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      lat = posicion.coords.latitude;
      lon = posicion.coords.longitude;

      //ubicacion actual
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3152b6ba37672decf7a09709e96e29c2`;

      //ubicacion por ciudad
      //const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=3152b6ba37672decf7a09709e96e29c2`;
      //   console.log(url);

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.weather[0].main);
          console.log(data.name);

          temperatura = Math.round(data.main.temp);
          valorTemp.textContent = `${temperatura} ºC`;
          let contTiempo = data.weather[0].description;
          descTemp.textContent = contTiempo.toUpperCase();
          let ubi = data.name;
          ubicacion.textContent = `You are at ${ubi}`;
          let valorViento = data.wind.speed;
          velocViento.textContent = `${valorViento} Km/h`;
          // let iconName = data.weather[0].icon;
          // const url = `imgs/amcharts_weather_icons_1.0.0/animated/${iconName}`;

          switch (data.weather[0].main) {
            case "Clouds":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg";
              break;
            case "Clear":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/day.svg";
              break;
            case "Thunderstorm":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/thunder.svg";
              break;
            case "Drizzle":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/rainy-1.svg";
              break;
            case "Rain":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/rainy-3.svg";
              break;
            case "Snow":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/snowy-2.svg";
              break;
            case "Atmosphere":
              animado.src =
                "imgs/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg";
              break;

            default:
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});
