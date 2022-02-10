export function parseURL(url: string) {
  const { parser, searchObject } = parseUrlInBrowser(url);

  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash,
    searchObject,
  };
}

function parseUrlInBrowser(urlToParse: string) {
  const parser = document.createElement('a');
  const searchObject = {};
  parser.href = urlToParse;

  const queries = parser.search.replace(/^\?/, '').split('&');
  for (let i = 0; i < queries.length; i++) {
    const split = queries[i].split('=');

    // @ts-expect-error
    searchObject[split[0]] = split[1];
  }
  return { parser, searchObject };
}
