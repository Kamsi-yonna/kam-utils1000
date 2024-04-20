import { format as formatDateFns } from "date-fns";

// Formats a date object into a string based on a specified format
export function formatDate(date: Date, format: string): string {
  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case "long":
      options.weekday = "long"; // Include the day of the week
      options.day = "numeric";
      options.month = "long";
      options.year = "numeric";
      break;
    case "short":
      options.day = "2-digit";
      options.month = "2-digit";
      options.year = "numeric";
      break;
    case "currentTime":
      return formatDateFns(new Date(), "h:mm:ss a");
    case "time":
      const [hours, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      return formatDateFns(
        new Date(0, 0, 0, hours, minutes, seconds),
        "h:mm:ss a"
      );
    case "full":
      options.weekday = "long"; // Include the day of the week
      options.day = "numeric";
      options.month = "long";
      options.year = "numeric";
      options.hour = "numeric";
      options.minute = "numeric";
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Calculates the number of days between two dates
export function daysBetween(date1: Date, date2: Date): number {
  const timeDifference = date2.getTime() - date1.getTime();
  return timeDifference / (1000 * 3600 * 24);
}
