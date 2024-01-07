const send = async (query: string, url: string) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  });
  const content = await rawResponse.json();
  return content;
};

export default send;
