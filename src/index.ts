// String manipulation functions

// Capitalizes the first letter of a string
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Converts a string to lowercase
export function lowerCase(str: string): string {
  return str.toLowerCase();
}

// Converts a string to uppercase
export function upperCase(str: string): string {
  return str.toUpperCase();
}

// Removes whitespace from the beginning and end of a string
export function trim(str: string): string {
  return str.trim();
}

// Replaces all occurrences of a search string with a replace string
export function replaceAll(
  str: string,
  search: string,
  replace: string
): string {
  return str.split(search).join(replace);
}

export { keys, mergeObj, values } from './object';
export * from './array';
export * from './date';
export * from './number';
