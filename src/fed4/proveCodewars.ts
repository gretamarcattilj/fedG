function howMuchILoveYou(petals: number): string {
    let aux: string[] = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let n: number = petals;
    while (!(1 <= n && n <= 6)) {
        if (n > 6) {
            n = n - 6;
        }
    }
    return aux[n - 1];
}

console.log(howMuchILoveYou(7), "I love you", "Number of petals can be higher than 6");
console.log(howMuchILoveYou(3), "a lot");
console.log(howMuchILoveYou(6), "not at all");

export function bmi(weight: number, height: number): string {
    let bmi: number = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmi(80, 1.80), "Normal");

function partsSums(ls: number[]): number[] {
    let n: number = ls.length;
    let result: number[] = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            result[j] += ls[i];
        }
    }
    return result;
}

console.log(partsSums([0, 1, 3, 6, 10]));

function partsSums2(ls: number[]): number[] {
    let n: number = ls.length;
    let result: number[] = Array(n + 1).fill(0);
    let sum: number = 0;
    for (let i = n - 1; i >= 0; i--) {
        sum += ls[i];
        result[i] = sum;
    }
    return result;
}

console.log(partsSums2([0, 1, 3, 6, 10]));

function addLetters(...letters: string[]): string {
    let result: number = 0;
    let aux: string = "abcdefghijklmnopqrstuvwxyz";
    if (letters.length === 0) {
        return "z";
    }
    for (let i = 0; i < letters.length; i++) {
        result += aux.indexOf(letters[i]) + 1;
    }
    if (result > 26) {
        result %= 26;
    }
    if (result === 0) {
        return "z";
    }
    return aux[result - 1];
}

console.log(addLetters("q", "v", "p", "n", "x", "c", "h", "j", "p"));
console.log(addLetters("h", "v", "q", "u", "i", "n", "w", "q", "g"));
console.log(addLetters('z'));
console.log(addLetters('y', 'c', 'b'));

function seven(m: number): number[] {
    let aux: number = m;
    let cont: number = 0;
    while (m >= 99) {
        aux = m % 10;
        m = Math.floor(m / 10);
        m = m - (2 * aux);
        cont += 1;
    }
    return [m, cont];
}

console.log(seven(477557101), [28, 7]);

function order(words: string): string {
    let ar = words.split(" ");
    let cont: number = 0;
    let result: string[] = Array(ar.length);
    let result2: string = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] >= "0" && words[i] <= "9") {
            result[Number(words[i]) - 1] = ar[cont];
            cont += 1;
        }
    }
    result2 = result.join(" ")
    return result2;
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

let nbYear = ((p0, percent, aug, p) => {
    let cont = 0;
    while (p0 < p) {
        p0 = p0 + p0 * (percent / 100) + aug;
        cont += 1;
    }
    return cont;
});

console.log(nbYear(1500, 5, 100, 5000));

function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (a1 == null || b1 == null || a1.length !== a2.length) {
        return false;
    }
    a1.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    a2.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    for (let i = 0; i < a1.length; i++) {
        if (a2[i] !== a1[i] ** 2) {
            return false;
        }
    }
    return true;
}

function gps(s: number, x: number[]) {
    // manca controllo array vuoto
    for (let i = 0; i < x.length - 1; i++) {
        x[i] = (x[i + 1] - x[i]) * 3600 / s;
    }
    return Math.floor(Math.max(...x));
}

console.log(gps(20, []));
console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
console.log(gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84]));

function SeriesSum(n: number): string {
    let result: number = 0;
    for (let i = 0; i < n; i++) {
        result += 1 / (1 + 3 * i);
    }
    return result.toString();
}

function newAvg(arr: number[], newavg: number): any {
    let sum: number = 0;
    let result: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    result = Math.ceil(newavg * (arr.length + 1) - sum);
    if (result <= 0) {
        throw "errore";
    }
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));

function nbDig(n: number, d: number) {
    let aux: number[] = Array(n + 1);
    let str: string = "";
    let cont: number = 0;
    for (let i = 0; i <= n; i++) {
        aux[i] = i ** 2;
    }
    str = aux.join("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == d.toString()) {
            cont += 1;
        }
    }
    return cont;
}

console.log(nbDig(10, 1));

function dateNbDays(a0: number, a: number, p: number): string {
    p = p / 36000;
    let aux: number = 0;
    let date: string[] = Array(3);
    let cont: number = 0;
    let result: string = "";
    while (a0 < a) {
        a0 = a0 + a0 * p;
        cont += 1;
    }
    aux = Math.floor(cont / 360);
    date[0] = (2016 + aux).toString();
    cont -= (aux * 365);
    aux = Math.floor(cont / 30);
    date[1] = (aux + 1).toString();
    switch (aux) {
        case 0: break;
        case 1: { cont -= 31; break; }
        case 2: { cont -= 59; break; }
        case 3: { cont -= 90; break; }
        case 4: { cont -= 120; break; }
        case 5: { cont -= 151; break; }
        case 6: { cont -= 181; break; }
        case 7: { cont -= 212; break; }
        case 8: { cont -= 243; break; }
        case 9: { cont -= 273; break; }
        case 10: { cont -= 304; break; }
        case 11: { cont -= 334; break; }
    }
    date[2] = (1 + cont).toString();
    result = date.join("-");
    return result;
}

console.log(dateNbDays(4281, 5087, 2));

function foldArray(array: number[], runs: number): number[] {
    let aux: number[];
    for (let i = 0; i < runs; i++) {
        aux = new Array(Math.ceil(array.length / 2));
        for (let j = 0; j < aux.length; j++) {
            aux[j] = array[j];
        }
        for (let j = 0; j < Math.floor(array.length / 2); j++) {
            aux[j] = array[j] + array[array.length - j - 1];
        }
        array = aux;
    }
    return aux;
}
console.log(foldArray([1, 2, 3, 4, 5], 1));

function getSum(a: number, b: number): number {
    let sum: number;
    if (a == b) {
        return a;
    } if (a < b) {
        sum = a;
        while (a + 1 <= b) {
            sum += a + 1;
            a = a + 1;
        }
    }
    if (a > b) {
        sum = b;
        while (b + 1 <= a) {
            sum += b + 1;
            b = b + 1;
        }
    }
    return sum;
}
console.log(getSum(0, -1));

function sendMessage(message: string): string {
    let aux: any = { " ": ["0", " "], "a": ["2", 2], "b": ["22", 2], "c": ["222", 2], "d": ["3", 3], "e": ["33", 3], "f": ["333", 3], "g": ["4", 4], "h": ["44", 4], "i": ["444", 4], "j": ["5", 5], "k": ["55", 5], "l": ["555", 5], "m": ["6", 6], "n": ["66", 6], "o": ["666", 6], "p": ["7", 7], "q": ["77", 7], "r": ["777", 7], "s": ["7777", 7], "t": ["8", 8], "u": ["88", 8], "v": ["888", 8], "w": ["9", 9], "x": ["99", 9], "y": ["999", 9], "z": ["9999", 9], ".": ["1", 1], ",": ["11", 1], "?": ["111", 1], "!": ["1111", 1], "'": ["*", "*"], "-": ["**", "*"], "+": ["***", "*"], "=": ["****", "*"] };
    let result: string = "";
    let remember: any;
    let num: boolean = false;
    for (let i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            if (aux[message[i]] !== undefined) {
                result += aux[message[i]][0];
                remember = aux[message[i]][0];
            }
        } else if (message[i] >= "0" && message[i] <= "9") {
            result += message[i];
            result += "-";
            remember = "-";
        } else if (message[i] >= "A" && message[i] <= "Z") {
            if (aux[message[i].toLowerCase()] !== undefined) {
                if (i >= 1 && aux[message[i].toLowerCase()][1] === remember) {
                    result += " ";
                    remember = "_";
                }
                if (num === false) {
                    result += "#";
                    num = true;
                }
                result += aux[message[i].toLowerCase()][0];
                remember = aux[message[i].toLowerCase()][1];
            }
        } else {
            if (aux[message[i]] !== undefined) {
                if (num === true && message[i] >= "a" && message[i] <= "z") {
                    result += "#";
                    num = false;
                    remember = "#";
                }
                if (i >= 1 && aux[message[i].toLowerCase()][1] === remember) {
                    result += " ";
                    remember = "_";
                }
                result += aux[message[i]][0];
                remember = aux[message[i]][1];
            }
        }


    }

    return result;
}

console.log(sendMessage("y1mpo-ZK!ZF.,ORLbnK2W8,Lip0-"));
console.log(sendMessage("Def Con 1!"));
console.log(sendMessage("hey"));


function wave(str: string): string[] {
    str = str.toLowerCase();
    let aux: string = "";
    let cont: number = 0;
    let cont2: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        } else {
            cont += 1;
        }
    }
    let result: string[] = new Array(cont);
    cont = 0;
    while (cont < str.length) {
        if (str[cont] === " ") {
            cont += 1;
            cont2 += 1;

        } else {
            for (let i = 0; i < str.length; i++) {
                if (i === cont) {
                    aux += str[i].toUpperCase();
                } else {
                    aux += str[i];
                }
            }
            result[cont - cont2] = aux;
            cont += 1;
            aux = "";
        }
    }
    return result;
}

console.log(wave("tu tu"));

function posAverage(s: string): number {
    let vect: string[] = s.split(", ");
    let cont: number = 0;
    let norm: number = 0;
    for (let i = 0; i < vect.length--; i++) {
        for (let j = i + 1; j < vect.length; j++) {
            for (let k = 0; k < vect[0].length; k++) {
                norm += 1;
                if (vect[i][k] === vect[j][k]) {
                    cont += 1;
                }
            }
        }
    }
    return (cont * 100 / norm);
}

function pyramid(n: number) {
    if (n == 0) {
        return [];
    }
    if (n == 1) {
        return [[1]];
    }
    let result: any[];
    let aux: number[] = [1];
    result = new Array(n);
    result = [[1]];
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= i; j++) {
            aux.push(1);
        }
        result.push(aux);
        aux = [1];
    }
    return result;
}

console.log(pyramid(3));

function sumTriangularNumbers(n: number): number {
    let sum: number = 1;
    let add: number = 1;
    let previuos: number = 1;
    for (let i = 1; i <= n; i++) {
        add += 1;
        sum += previuos + add;
        previuos = previuos + add;

    }
    return sum;
}

console.log(sumTriangularNumbers(6));

function rowSumOddNumbers(n: number) {
    let sum: number = n * (n - 1) + 1;
    let add: number = n * (n - 1) + 1;
    for (let i = 1; i < n; i++) {
        add += 2;
        sum += add;
    }
    return sum;
}

console.log(rowSumOddNumbers(2));

function balancedNum(number: number) {
    let str: string = number.toString()
    let n: number = str.length;
    let aux: number = 0;
    if (n % 2 === 1) {
        for (let i = 0; i < Math.floor(n / 2); i++) {
            aux += Number(str[i]);
            aux -= Number(str[n - i - 1]);
        }
    } else {
        for (let i = 0; i < (n / 2) - 1; i++) {
            aux += Number(str[i]);
            aux -= Number(str[n - i - 1]);
        }
    }
    if (aux === 0) {
        return "Balanced";
    }
    return "Not Balanced";
}

console.log(balancedNum(41418333));

function save(sizes: number[], hd: number): number {
    let sum: number = 0;
    let cont: number = 0;
    for (let i = 0; i < sizes.length; i++) {
        sum += sizes[i];
        if (sum > hd) {
            return cont;
        }
        cont += 1;
    }
    return cont;
}

function findOdd(xs: number[]): number {
    let cont: number = 1;
    for (let i = 0; i < xs.length; i++) {
        for (let j = 0; j < xs.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (xs[i] === xs[j]) {
                    cont += 1;
                }
            }
        }
        if (cont % 2 === 1) {
            return xs[i];
        } else {
            cont = 1;
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

function solution(n: number) {
    let sum: number = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));

function spinWords(words: string) {
    let result: string = "";
    let aux: string[] = words.split(" ");
    let auxStr: string = "";
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].length >= 5) {
            for (let j = aux[i].length - 1; j >= 0; j--) {
                auxStr += aux[i][j];
            }
            aux[i] = auxStr;
        }
    }
    result = aux.join(" ");
    return result;
}

function findMissingLetter(array: string[]): string {
    let result: string = "";
    let x: number = array[0].charCodeAt(0);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === String.fromCharCode(x + i)) {
            continue;
        } else {
            return String.fromCharCode(x + i);
        }
    }
    throw "non dovevi arrivare qui"
}

function camelCase(str: string): string {
    let aux: string[] = str.split(" ");
    let auxStr: string = "";
    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < aux[i].length; j++) {
            if (j === 0) {
                auxStr += aux[i][j].toUpperCase();
            } else {
                auxStr += aux[i][j];
            }
        }
        aux[i] = auxStr;
        auxStr = "";
    }
    auxStr = aux.join("");
    return auxStr;
}

console.log(camelCase("test case"));

function backwardsPrime(start: number, stop: number): number[] {
    let auxStr = "";
    let auxStrRev = "";
    let result: number[] = [];
    for (let i = start; i <= stop; i++) {
        if (i.toString().length === 1) {
            continue;
        } else {
            auxStr = i.toString();
            for (let j = auxStr.length - 1; j >= 0; j--) {
                auxStrRev += auxStr[j];
            }
            let num: number = Number(auxStrRev);
            if (isPrime(i) && isPrime(num) && auxStrRev !== auxStr) {
                result.push(i);
            }
            auxStrRev = "";
        }
    }
    return result;
}

console.log(backwardsPrime(70000, 70245));
console.log(backwardsPrime(2, 100));

function iqTest(numbers: string): number {
    let contP: number = 0;
    let contD: number = 0;
    let aux: string[] = numbers.split(" ");
    for (let i = 0; i < aux.length; i++) {
        if (Number(aux[i]) % 2 == 0) {
            contP += 1;
        } else {
            contD += 1;
        }
    }
    if (contP == 1) {
        for (let i = 0; i < aux.length; i++) {
            if (Number(aux[i]) % 2 == 0) {
                return i + 1;
            }
        }
    } else {
        for (let i = 0; i < aux.length; i++) {
            if (Number(aux[i]) % 2 == 1) {
                return i + 1;
            }
        }
    }
    throw "non saresti dovuto arrivare qui";
}

function digPow(n: number, p: number) {
    let auxNum: number = 0;
    let aux: string = n.toString();
    let l: number = aux.length;
    for (let i = l - 1; i >= 0; i--) {
        auxNum += Number(aux[i]) ** (p + i);
    }
    if (auxNum % n == 0) {
        return auxNum / n;
    } else {
        return -1;
    }
}

//console.log(digPow(89, 1));
//console.log(isPrime(4));
function numPrimorial(n: number) {
    let cont: number = 0;
    let num: number = 2;
    let result: number = 1;
    while (cont < n) {
        if (isPrime(num)) {
            result *= num;
            cont += 1;
        }
        num += 1;
    }
    return result;
}
function isPrime(n: number) {
    for (let j = 2; j <= Math.sqrt(n); j++) {
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

console.log(numPrimorial(5));

function sumOfIntervals(intervals: [number, number][]) {
    let sum: number = 0;
    intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            if (a[1] > b[1]) {
                return 1;
            } else if (a[1] < b[1]) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    let remember: number = intervals[0][0];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= remember) {
            sum += intervals[i][1] - intervals[i][0];
            remember = intervals[i][1]
        } else {
            sum += intervals[i][1] - remember;
            remember = intervals[i][1];
        }
    }
    return sum;
}

console.log(sumOfIntervals([[1, 5], [1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 3]]));

function divisibleByFive(str: string): boolean {
    let sum: number = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        sum += Number(str[i]) * (2 ** i);
    }
    if (sum % 5 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisibleByFive("101"));

function toAlternatingCase(s: string): string {
    let result: string = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            result += s[i].toLowerCase();
        } else {
            result += s[i].toUpperCase();
        }
    }
    return result;
}
