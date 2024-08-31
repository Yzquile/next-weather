
export default function getWeatherBg(icon) {
    switch (icon) {
      case "01d":
        return 'img/clear.jpg';
      case "01n":
        return 'img/night.jpg';
      case "02d":
      case "03d":
      case "04d":
        return 'img/clouds.jpg';
      case "02n":
      case "03n":
      case "04n":
        return 'img/clouds-night.jpg';
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return 'img/rain.jpg';
      case "11d":
      case "11n":
        return 'img/thunderstorm.jpg';
      case "13d":
      case "13n":
        return 'img/snow.jpg';
      case "50d":
      case "50n":
        return 'img/mist.jpg';
      default:
        return 'img/clear.jpg'; // Fallback image
    }
  }