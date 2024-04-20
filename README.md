## Kam Utils 1000

### Overview

Welcome to your package! This package provides a collection of useful functions for various tasks, including array manipulation, date formatting, string operations, number calculations, and object handling. Below is a brief overview of the main functions included in this package:

### Functions

1. **Array Functions**

   - `chunk`: Divides an array into smaller arrays of a specified size.
   - `randomItem`: Returns a random item from an array.

2. **Date Functions**

   - `formatDate`: Formats a date object into a string based on a specified format.
   - `daysBetween`: Calculates the number of days between two dates.

3. **String Manipulation Functions**

   - `replaceAll`: Replaces all occurrences of a search string with a replace string.
   - `removeUnderscores`: Replaces underscores with spaces in a string.
   - `formatUrl`: Decodes a URL string.

4. **Number Functions**

   - `roundNum`: Rounds a number to a specified number of decimal places.
   - `clampNum`: Clamps a number between a minimum and maximum value.
   - `percentageNum`: Calculates the percentage of a number.
   - `absoluteNum`: Calculates the absolute value of a number.

5. **Object Functions**
   - `keys`: Returns an array of keys in an object.
   - `values`: Returns an array of values in an object.
   - `mergeObj`: Merges two objects into a new object.

### Installation

To install the kam-utils1000 package, you can use the following command:

```bash
npm i kam-utils1000
```

This command will fetch and install the kam-utils1000 package from the npm package registry, making it available for use in your project.

### Usage

To use this package, simply import the desired functions from the respective files into your project. For example:

```typescript
import { chunk, formatDate, capitalize } from "kam-utils1000/array.ts";
import { roundNum, clampNum } from "kam-utils1000/number.ts";

// or the entire functions
import { firmatDate, roundNum } from "kam-utils1000";
```

### Contribution

If you find any issues or have suggestions for improvements, feel free to contribute by forking the repository and submitting a pull request.

### License

This package is licensed under the MIT License. Feel free to use and modify it according to your needs.

Thank you for using your package! If you have any questions or need further assistance, please don't hesitate to reach out.
