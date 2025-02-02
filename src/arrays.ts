/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        return [...numbers, numbers[0]];
    } else {
        const firstLast = [numbers[0], numbers[numbers.length - 1]];
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => parseInt(num) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let arr: number[] = [];
    amounts.map((num) => {
        //console.log(num.slice(1));
        if (num[0] === "$") {
            num = num.slice(1);
            arr = [...arr, parseInt(num) || 0];
        } else {
            arr = [...arr, parseInt(num) || 0];
        }
    });
    return arr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let m: string[] = [];
    messages.map((message) => {
        if (message[message.length - 1] === "!") {
            m = [...m, message.toUpperCase()];
        } else {
            m = [...m, message];
        }
    });
    return m.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const four = words.filter((word: string): boolean => word.length < 4);
    return four.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const num = colors.length;
    colors = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return num === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    let x = "";
    if (addends.length === 0) {
        return "0=0";
    }
    addends.map((num: number): number => (sum += num));
    x = sum.toString() + "=";
    addends.map((num) => {
        x += num.toString() + "+";
    });
    return x.slice(0, -1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negative = false;
    const index = values.findIndex((val: number): boolean => val < 0);
    const pos = values.filter((val: number): boolean => {
        if (val < 0) {
            negative = true;
        }
        return !negative;
    });
    const sum: number = pos.reduce(
        (total: number, positive: number) => (total += positive),
        0
    );
    const final: number[] = [...values];
    if (index === -1) {
        final.splice(values.length, 0, sum);
    } else {
        final.splice(index + 1, 0, sum);
    }
    return final;
}
