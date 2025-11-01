const text = document.querySelector("#text");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const city = document.querySelector("#city");

async function search() {
  if (text.value === "") {
    alert("⚠️ Please enter a city name");
    return;
  }

  try {
    // OpenWeather API with metric units
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=b4fffe294ce8269c6988116da2ab94ea&units=metric`;

    let res = await fetch(url);
    let data = await res.json();

    if (data.cod !== 200) {
      alert("❌ City not found. Please enter a valid name.");
      return;
    }

    console.log(data);

    // Updating UI
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " Km/h";

    // Optional: Clear input after search
    text.value = "";

  } catch (error) {
    console.error(error);
    alert("⚠️ Something went wrong. Try again later.");
  }
}
