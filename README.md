# [WeatherWatch](https://connorwarme.github.io/weather/): a weather app  
  
![preview](https://github.com/connorwarme/weather/blob/main/screenshots/la.png?raw=true "preview")  

## objectives  
* provide weather for given location   
* utilize OpenWeatherMap API  
* display images that correlate with weather data  
* create toggle for Fahrenheit / Celsius  
* implement mobile-friendly UI  
  
## reflections  
* initial foray into asynchronous JS (learned promises, async/await syntax, fetch API, utilize data returned)  
* strove for simplicity and clarity in UI  
* first effort at a mobile-friendly app  
 
## screenshots  
* mobile friendly UI - added menu button to select view: current info, detailed data, and forecast  
![main](https://github.com/connorwarme/weather/blob/main/screenshots/mobilea.png?raw=true "main")  
![details](https://github.com/connorwarme/weather/blob/main/screenshots/mobileb.png?raw=true "details")  
![forecast](https://github.com/connorwarme/weather/blob/main/screenshots/mobilec.png?raw=true "forecast")  
  
* the whole page:  
![full](https://github.com/connorwarme/weather/blob/main/screenshots/nyfull!.png?raw=true "full")  
  
## notes  
* to future self: Safari processes date differently. for Firefox and Chrome, format of '2022-10-01 11:57:00' works fine. Safari needs '2022-10-01T11:57:00', which I accomplished with a dateString.replace(/ /g,"T").  