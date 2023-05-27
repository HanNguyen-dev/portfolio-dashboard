export const fetchBase = (url: string) =>
  fetch(url).then(resp => {
    if (!resp.ok)
      throw resp.text;
    return resp.json();
  });