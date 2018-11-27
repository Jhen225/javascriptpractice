//longest word in a string
function longestWord(sentence) {
    let words = sentence.match(/[a-zA-Z0-9]+/g);
    let sorted = words.sort((a, b) => b.length - a.length);
    let filtered = sorted.filter(w => w.length == sorted[0].length);
    if (filtered.length > 1) return filtered;
    return filtered[0];
}

//anagram
function isAnagram(word, toCheck) {
    let wMap = {}, toCheckMap = {};
    wMap = wordMap(word);
    toCheckMap = wordMap(toCheck);
    let wMapKeys = Object.keys(wMap);
    if (wMapKeys.length != Object.keys(toCheckMap).length || word === toCheck) {
        return false;
    }
    for (let k of wMapKeys) {
        if (!toCheckMap[k] || toCheckMap[k] != wMap[k]) {
            return false
        }
    }
    return true;
}

function toLeet(str) {
    let leetAlphaMap = {
        "a": "4",
        "e": "3",
        "i": "!",
        "l": "1",
        "s": "$"
    }
    let newStr = str.toLowerCase().match(/[a-z]/g);
    for(let i = 0; i < str.length; i++){
        let char = newStr[i];
        if(leetAlphaMap[char]){
            newStr[i] = leetAlphaMap[char];
        }
    }
    return newStr.join('');
}

function wordMap(word) {
    let wMap = {};
    word.toLowerCase().match(/[a-z]/).map(char => char !== ' ' && wMap[char] ? wMap[char]++ : wMap[char] = 1);
    return wMap;
}

let output = toLeet("Angel");
// angel
console.log("output: ", output);