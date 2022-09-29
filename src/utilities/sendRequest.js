export default async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    console.log('preparing fetch with ', url, options);
    const res = await fetch(url, options);
    if (res.ok) return res.json();
  }