import config from 'config';

export const buildRequest = (url) => (
  `${config.api.url}${url}`
);
