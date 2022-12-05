function capitalize(str) {
    let firstLetter = str[0].toUpperCase();
    let restStr = str.slice(1)

    return firstLetter.concat(restStr)
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

const calculator = {
    add: function (x, y) {
        return x + y
    },
    subtract: function (x, y) {
        return x - y
    },
    divide: function (x, y) {
        return x / y
    },
    multiply: function (x, y) {
        return x * y
    }
}

function analyzeArray(somarr) {
    let len = somarr.length;
    let min = somarr.reduce((curr, min) => curr < min ? curr : min, somarr[0]);
    let max = somarr.reduce((curr, max) => curr > max ? curr : max, somarr[0]);
    let avg = (somarr.reduce((curr, sum) => curr + sum)) / len;

    return {
        average: avg,
        min: min,
        max: max,
        length: len
    }
}

function caesarCipher(str) {
    let newstr = str.split("");
    return cipher(newstr, str)
}

function cipher(rawstr, str){
    for (let i = 0; i < rawstr.length; i++) {
        if (rawstr[i] === " ") continue;
        if (rawstr[i] === "z") rawstr[i] = "a";
        else{

            let charcode = str.charCodeAt(i) + 1;
            let encryptChar = String.fromCharCode(charcode);
            rawstr[i] = encryptChar;
        }
    }
    return rawstr.join("")
}

export { capitalize, reverseString, calculator, analyzeArray, caesarCipher }