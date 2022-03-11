export function logError(err) {
  console.log(err);
  throw err;
}

export function parseJSON(response) {
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export function throwError(response) {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function checkStatus(response) {
  if (!response.ok) {
    throwError(response);
  }

  return response;
}
