import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f8f762294966fb014307596f65746839';

class App extends Component {
  // set inicial state for all properts
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // connect with the api function
  getApi = async (e) => {
    e.preventDefault(); // prevent reload all poage and do not bring the data
    const city = e.target.elements.city.value; // get the value from the input
    const country = e.target.elements.country.value; // get the value from the input

    // get and connect the data from API
    const callApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // converts the date in json format
    const data = await callApi.json();

    if (city && country) {
      // log it out for now
      console.log(data);

      this.setState({
        // json properts main.temp
        temperature: data.main.temp, // update the value acording query from input
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the city and country",
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 form-container">
                  <Titles />
                    <Form getApi={this.getApi}/>
                    <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
