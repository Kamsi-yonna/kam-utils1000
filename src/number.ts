// Round to a specified number of decimal places
export function roundNum(num: number, decimals: number): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Clamp a number between a minimum and maximum value
export function clampNum(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

// Calculate the percentage of a number
export function percentageNum(num: number, total: number): number {
  return (num / total) * 100;
}

// Calculate the absolute value of a number
export function absoluteNum(num: number): number {
  return Math.abs(num);
}

// Calculate the factorial of a number
export function factorialNum(num: number): number {
  if (num === 0) {
    return 1;
  }
  return num * factorialNum(num - 1);
}
