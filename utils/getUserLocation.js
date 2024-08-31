
//Geolocation API to fetch the user's latitude and longitude values
//Effects only on the first load.
//if user denies location access, set default location to Cebu City
export function getUserLocation(setLocation) {
    const handleLocationSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lon: longitude });
    };
  
    const handleLocationError = (error) => {
      console.warn(
        "Location access denied, setting default to Cebu City.",
        error
      );
      setLocation({ lat: 10.3157, lon: 123.8854 }); // Cebu City's lat and lon
    };
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError
      );
    } else {
      console.warn(
        "Geolocation is not supported by this browser, setting default to Cebu City."
      );
      setLocation({ lat: 10.3157, lon: 123.8854 }); // Cebu City's lat and lon
    }
  }