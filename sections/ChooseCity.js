const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector (".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

const updateCurrentCity = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
  };


const updateWeather = (city) => {
    updateCurrentCity(city);
  displayCurrentWeather(city);
};

bucharest.addEventListener("click", () => {
  updateWeather("București");
});

timisoara.addEventListener("click", () => {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", () => {
  updateWeather("Oradea");
});

arad.addEventListener("click", () => {
  updateWeather("Arad");
});

sibiu.addEventListener("click", () => {
  updateWeather("Sibiu");
});