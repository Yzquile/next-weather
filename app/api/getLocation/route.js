

import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cityName = searchParams.get('cityName');

  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return NextResponse.json({ lat, lon });
    } else {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    return NextResponse.json({ error: "Failed to fetch location data" }, { status: 500 });
  }
}