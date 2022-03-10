import config from 'config';

export const buildRequest = (url, body = null) => {
  const apiUrl = `${config.api.url}${url}`;

  const init = {
    headers: new Headers(),
    method: 'GET',
  };

  if (body) {
    init.method = 'POST';
    init.body = JSON.stringify(body);
  }

  return new Request(apiUrl, init);
};
