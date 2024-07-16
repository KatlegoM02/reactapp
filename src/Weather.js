import React from "react";
import axios from "axios";
export default function Weather(){
    function handleResponse(response) {
      alert(`The weather in New York is ${response.data.main.temp}°C`);
    }
       let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}