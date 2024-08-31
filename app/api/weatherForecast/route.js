export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
  
    if (!lat || !lon) {
      return new Response(
        JSON.stringify({ error: "Missing coordinates" }, { status: 400 })
      );
    }
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=4&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Error fetching location data:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch weather data" }),
        { status: 500 }
      );
    }
  }
  