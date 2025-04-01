export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const ip = searchParams.get('ip');
  
      if (!ip) {
        return new Response(JSON.stringify({ message: 'IP address is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
      const geoData = await geoResponse.json();
  
      if (geoData.status === 'fail') {
        throw new Error(geoData.message || 'Failed to fetch geolocation data');
      }
  
      return new Response(JSON.stringify(geoData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Proxy request failed:', err);
      return new Response(JSON.stringify({ message: 'Failed to fetch geolocation data', error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }