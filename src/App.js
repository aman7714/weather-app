import React, {useState} from "react";

const api = {
  key: "3bcfbd0050e38e230029b4daea3dc0bf",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div className="searchBar">
          <input
            className="search"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          
          <div className="weatherDetails">
            {/* Location  */}
            <div className="weatherDetail">
            <h4>Location</h4>
            <p>{weather.name}</p>
            </div>

            {/* Temperature Celsius  */}
           <div className="weatherDetail">
           <h4>Temperature</h4>
           <p>{weather.main.temp}°C</p>
           </div> 

            {/* Condition (Sunny ) */}
            <div className="weatherDetail">
            <h4>Current Weather</h4>
            <p>{weather.weather[0].main}</p>
            </div>
            {/* <p>({weather.weather[0].description})</p> */}

            {/* wind */}
           <div className="weatherDetail">
           <h4>Wind</h4>
           <p>{weather.wind.speed} km/h</p>
           </div>

            {/* visiblity */}
           <div className="weatherDetail">
           <h4>Visibility</h4>
           <p>{weather.visibility} m</p>
           </div> 
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
