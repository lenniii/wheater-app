import React, { useState, ChangeEvent, FormEvent } from "react";
import HeaderBar from "./containers/HeaderBar/HeaderBar";
import SelectedDay from "./containers/SelectedDay/SelectedDay";
import WeeklyWeather from "./containers/WeeklyWeather/WeeklyWeather";
import {
  fetch_current_weather,
  fetch_forecast_weather
} from "./helpers/helpers";
import "./App.css";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedDay, setSelectedDay] = useState({});
  const [weeklyWeather, setWeeklyWeather] = useState({});

  const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const current_weather = await fetch_current_weather(search);
    const forecast_weather = await fetch_forecast_weather(search);
    setSelectedDay(current_weather);
    setWeeklyWeather(forecast_weather);
  };

  return (
    <div className="ui">
      <HeaderBar
        handleChange={handleSearchChange}
        search={search}
        onSubmit={handleSubmit}
      />
      <SelectedDay day={selectedDay} />
      <WeeklyWeather />
    </div>
  );
};

export default App;
