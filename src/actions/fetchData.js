var page = 0;

export async function fetchData() {
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 12,
    offset: page++ * 12,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  try {
    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return;
  }
}
