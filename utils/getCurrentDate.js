export function getCurrentDate(weatherData) {
    let unix_timestamp = weatherData?.dt;
    let timezone_offset = weatherData?.timezone;
  
    // Convert timezone offset from seconds to milliseconds
    let local_time = new Date((unix_timestamp + timezone_offset) * 1000);
  
    // Extract parts of the date
    const [day, date, month, year] = local_time.toUTCString().split(" ");
    const hour = local_time.getUTCHours();
    const minute = local_time.getUTCMinutes();
  
    // Calculate GMT offset
    const localGMT = timezone_offset / 3600;
    const gmtString = `GMT${localGMT >= 0 ? "+" : ""}${localGMT}`;
  
    // Format the output
    return `${day} ${date} ${month} ${year} ${hour}:${minute} ${gmtString}`;
  }