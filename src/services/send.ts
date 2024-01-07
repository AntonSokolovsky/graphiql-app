const send = async (query: string, variables: string, url: string) => {
  let parsedVariables = {};
  if (variables) {
    parsedVariables = JSON.parse(variables);
  }
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query, variables: parsedVariables }),
  });
  const content = await rawResponse.json();
  return content;
};

export default send;
