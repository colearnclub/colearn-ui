export function escapeForRegExp(str: string) {
  return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function matchAny(str: string) {
  return new RegExp(escapeForRegExp(str), 'gi');
}

export function matchPartial(str: string) {
  return new RegExp(`(?:^|\\s)${escapeForRegExp(str)}`, 'i');
}

export function matchExact(str: string) {
  return new RegExp(`^${escapeForRegExp(str)}$`, 'i');
}

export const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i',
); // fragment locator

export function markIt(name: string, query: string): string {
  return name.replace(matchAny(query), '<mark>$&</mark>');
}
