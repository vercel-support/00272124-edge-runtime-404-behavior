export const testRequest = async () => {
  const response = await fetch('https://auth-check.link:3333/api/groups/', {
    method: 'POST',
    body: '{}',
    headers: {
      Authorization: "Bearer WRONG",
    },
  });
  return response;
};
