let citySearch = document.getElementById("citySearch");
let searchBtn = document.getElementById("searchBtn");
let city = document.getElementById("city");
let min_temp = document.getElementById("min_temp");
let max_temp = document.getElementById("max_temp");
let temp = document.getElementById("temp");
let day = document.getElementById("day");
let date = document.getElementById("date");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = citySearch.value;
  if (cityVal == "") {
    city.innerHTML = "Please enter city name";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1d5f75e8cd1c950bb0e136a723b5ce1c`;
      const data = await fetch(url);
      const parsedData = await data.json();
    //   console.log(parsedData);
      city.innerHTML = parsedData.name + " , " + parsedData.sys.country;
      min_temp.innerHTML = "Weather : " + parsedData.weather[0].main;
      max_temp.innerHTML = "Humidity : " + parsedData.main.humidity;
      temp.innerHTML =
        "TEMP: " + parsedData.main.temp.toString().slice(0, 2) + "&deg" + "C";
    } catch (error) {
      console.log(error);
    }
  }
  citySearch.value = "";
};

searchBtn.addEventListener("click", getInfo);

let new_date = new Date();
console.log(new_date);

date.innerHTML = new_date.toString().slice(4,15);

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let week = new_date.getDay();
day.innerHTML = days[week];
