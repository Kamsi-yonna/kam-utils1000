// Returns an array of keys in an object
export function keys(obj: object): string[] {
  return Object.keys(obj);
}

// Returns an array of values in an object
export function values(obj: object): any[] {
  return Object.values(obj);
}

// Merges two objects into a new object
export function mergeObj(obj1: object, obj2: object): object {
  return { ...obj1, ...obj2 };
}
