const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector (".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");


// Doar actualizeaza in DOM fraza "Orasul tau curent este "city""
const updateCurrentCity = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
  };


// Aici poti adauga functionalitati cand se schimba orasul
const updateWeather = (city) => {
    updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  
  localStorage.setItem("city", city);
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