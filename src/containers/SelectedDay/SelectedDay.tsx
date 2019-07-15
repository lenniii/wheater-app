import React from "react";
import TempImage from "../../components/tempImage/tempImage";
import { isObjectEmpty, toCelsius } from "../../helpers/helpers";

const SelectedDay: React.FC<IProps> = ({ day }) => {
  console.log(day);
  if (isObjectEmpty(day) || day.cod != 200) return <div>LOL</div>;
  return (
    <div className="container sm text-primary-color">
      <h1 className="text-center">{day.name}</h1>
      <div className="row align-items-center">
        <div className="col-sm text-center">
          <TempImage tempDescription={day.weather[0].description} />
        </div>
        <div className="col-sm text-center text-primary-color display-1">
          {toCelsius(day.main.temp).toFixed(1) + "°"}
        </div>
      </div>

      <div className="row align-items-center h2">
        <div className="col-sm text-center ">
          <i className="fas fa-tint" /> {day.main.humidity + "%"}
        </div>
        <div className="col-sm text-center ">
          <i className="fas fa-tachometer-alt" /> {day.main.pressure + " mBar"}
        </div>
      </div>
      <div className="row align-items-center h2">
        <div className="col-sm text-center ">
          <i className="fas fa-temperature-low" />
          {""}
          {toCelsius(day.main.temp_min).toFixed(1) + "°"}
        </div>
        <div className="col-sm text-center ">
          <i className="fas fa-temperature-high" />
          {""}
          {toCelsius(day.main.temp_max).toFixed(1) + "°"}
        </div>
      </div>
    </div>
  );
};

interface IProps {
  day: any;
}

export default SelectedDay;
