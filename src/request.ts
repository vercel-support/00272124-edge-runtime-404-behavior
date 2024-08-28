const BASE_URL = process.env.BASE_URL;

export const testRequest = async () => {
  const response = await fetch('https://webhook.site/eedcbf4f-66da-4baa-a725-df6c3ab64292', {
    method: 'POST',
    body: '{}',
    headers: {
      Authorization: `Bearer WRONG`,
    },
  });
  return response;
};
