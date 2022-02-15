export function range(count: number): number[] {
  return Array.from(Array(count).keys());
}

export function rangeFrom(from: number, to: number): number[] {
  return [...range(to - from).map((_, i) => i + from)];
}

export function uniq<T>(data: T[]): T[] {
  return Array.from(new Set(data));
}

export function remove<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insert<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export function replace<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

export function toggle<T>(array: T[], item: T): T[] {
  const index = array.indexOf(item);
  return index === -1 ? [...array, item] : remove(array, index);
}

export function delay(ms = 500) {
  return new Promise<void>((accept) => setTimeout(() => accept(), ms));
}
