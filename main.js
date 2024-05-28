const apiKey = 'chaveapi';
let pos = 'sao paulo';
const lang = 'pt_br';
const units = 'metric'
const searchInput = document.querySelector('.searchbar');
const searchButton = document.querySelector('.searchb');

searchButton.addEventListener('click', () => {
  pos = searchInput.value;
  if (searchInput.value !== '') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pos}&lang=${lang}&units=${units}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            // Update the HTML elements with the weather data
            document.querySelector('.city').textContent = `Clima em ${data.name}, ${data.sys.country}`;
            document.querySelector('.temp').textContent = `${data.main.temp}°C`;
            document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector('.description').textContent = `${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`;
            document.querySelector('.humidity').textContent = `Umidade: ${data.main.humidity}%`;
            document.querySelector('.wind').textContent = `Vento: ${data.wind.speed} m/s`;
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
  }
});