// Divides an array into smaller arrays of a specified size
export function chunk(arr: any[], size: number): any[][] {
  return arr.reduce((acc: any, val: any, i: number) => {
    if (i % size === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(val);
    return acc;
  }, []);
}

// Returns a random item from an array
export function randomItem(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}
