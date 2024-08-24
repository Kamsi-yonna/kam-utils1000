declare function keys(obj: object): string[];
declare function values(obj: object): any[];
declare function mergeObj(obj1: object, obj2: object): object;

declare function chunk(arr: any[], size: number): any[][];
declare function randomItem(arr: any[]): any;

declare function formatDate(date: Date, format: string): string;
declare function daysBetween(date1: Date, date2: Date): number;

declare function roundNum(num: number, decimals: number): number;
declare function clampNum(num: number, min: number, max: number): number;
declare function percentageNum(num: number, total: number): number;
declare function absoluteNum(num: number): number;

declare function capitalize(str: string): string;
declare function lowerCase(str: string): string;
declare function upperCase(str: string): string;
declare function trim(str: string): string;
declare function replaceAll(str: string, search: string, replace: string): string;

export { absoluteNum, capitalize, chunk, clampNum, daysBetween, formatDate, keys, lowerCase, mergeObj, percentageNum, randomItem, replaceAll, roundNum, trim, upperCase, values };
