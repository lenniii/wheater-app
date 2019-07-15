import React from "react";
import Sunny from "../../assets/icons/Sunny.png";
import FewClouds from "../../assets/icons/PartlyCloudyDay.png";
import ScatteredClouds from "../../assets/icons/Cloudy.png";
import BrokenClouds from "../../assets/icons/Overcast.png";
import ShowerRain from "../../assets/icons/HeavyRain.png";
import Rain from "../../assets/icons/FreezingRain.png";
import Thunderstorm from "../../assets/icons/CloudRainThunder.png";
import Snow from "../../assets/icons/Blizzard.png";
import Mist from "../../assets/icons/Fog.png";

const TempIcon: React.FC<IProps> = ({ tempDescription }) => {
  let imageTemplate = null;

  switch (tempDescription) {
    case "clear sky":
      imageTemplate = <img src={Sunny} alt={tempDescription} />;
      break;

    case "few clouds":
      imageTemplate = <img src={FewClouds} alt={tempDescription} />;
      break;
    case "scattered clouds":
      imageTemplate = <img src={ScatteredClouds} alt={tempDescription} />;
      break;
    case "broken clouds":
      imageTemplate = <img src={BrokenClouds} alt={tempDescription} />;
      break;
    case "shower rain":
      imageTemplate = <img src={ShowerRain} alt={tempDescription} />;
      break;
    case "rain":
      imageTemplate = <img src={Rain} alt={tempDescription} />;
      break;
    case "thunderstorm":
      imageTemplate = <img src={Thunderstorm} alt={tempDescription} />;
      break;
    case "fog":
      imageTemplate = <img src={Snow} alt={tempDescription} />;
      break;
    case "mist":
      imageTemplate = <img src={Mist} alt={tempDescription} />;
      break;

    default:
      imageTemplate = null;
  }

  return imageTemplate;
};

export default TempIcon;
interface IProps {
  tempDescription: string;
}
