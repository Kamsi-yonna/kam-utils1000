// Formats a date object into a string based on a specified format
export function formatDate(date: Date, format: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Calculates the number of days between two dates
export function daysBetween(date1: Date, date2: Date): number {
  const timeDifference = date2.getTime() - date1.getTime();
  return timeDifference / (1000 * 3600 * 24);
}
