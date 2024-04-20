## README Content for Your Package

### Overview

Welcome to your package! This package provides a collection of useful functions for various tasks, including array manipulation, date formatting, string operations, number calculations, and object handling. Below is a brief overview of the main functions included in this package:

### Functions

1. **Array Functions**

   - `chunk(arr: any[], size: number): any[][]`: Divides an array into smaller arrays of a specified size.
   - `randomItem(arr: any[]): any`: Returns a random item from an array.

2. **Date Functions**

   - `formatDate(date: Date, format: string): string`: Formats a date object into a string based on a specified format.
   - `daysBetween(date1: Date, date2: Date): number`: Calculates the number of days between two dates.

3. **String Manipulation Functions**

   - `capitalize(str: string): string`: Capitalizes the first letter of a string.
   - `lowerCase(str: string): string`: Converts a string to lowercase.
   - `upperCase(str: string): string`: Converts a string to uppercase.
   - `trim(str: string): string`: Removes whitespace from the beginning and end of a string.
   - `replaceAll(str: string, search: string, replace: string): string`: Replaces all occurrences of a search string with a replace string.
   - `removeUnderscores(str: string): string`: Replaces underscores with spaces in a string.
   - `formatUrl(url: string): string`: Decodes a URL string.

4. **Number Functions**

   - `roundNum(num: number, decimals: number): number`: Rounds a number to a specified number of decimal places.
   - `clampNum(num: number, min: number, max: number): number`: Clamps a number between a minimum and maximum value.
   - `percentageNum(num: number, total: number): number`: Calculates the percentage of a number.
   - `absoluteNum(num: number): number`: Calculates the absolute value of a number.

5. **Object Functions**
   - `keys(obj: object): string[]`: Returns an array of keys in an object.
   - `values(obj: object): any[]`: Returns an array of values in an object.
   - `mergeObj(obj1: object, obj2: object): object`: Merges two objects into a new object.

### Usage

To use this package, simply import the desired functions from the respective files into your project. For example:

```typescript
import { chunk, formatDate, capitalize } from "your-package/array.ts";
import { roundNum, clampNum } from "your-package/number.ts";
// Use the imported functions in your code
```

### Contribution

If you find any issues or have suggestions for improvements, feel free to contribute by forking the repository and submitting a pull request.

### License

This package is licensed under the MIT License. Feel free to use and modify it according to your needs.

Thank you for using your package! If you have any questions or need further assistance, please don't hesitate to reach out.
