module.exports = function check(str, bracketsConfig) {
    let arr = str.split(''),
        stek = [],
        niceConfig = [],
        counterOfUnpairedBrackets = 0,
        position;

    bracketsConfig.forEach((item, i) => {
        item.forEach((elem, i) => {
            niceConfig.push(elem);
        });
    });
    arr.forEach((item) => {
        position = niceConfig.indexOf(item);
        if (niceConfig[position] == niceConfig[position+1]) {
            let n = stek.indexOf(item);
            if ((n !== -1) && (stek[stek.length-1] == item)) {
                stek.pop();
            } else {
                stek.push(item);
            }
        } else {
            if (position%2 == 0) {
                stek.push(item);
            }
            if (position%2 !== 0) {
                if ((stek.length > 0) && (stek[stek.length-1] == niceConfig[position-1])) {
                   stek.pop();
               } else {
                  counterOfUnpairedBrackets = counterOfUnpairedBrackets + 1;
               }
            }
        }
    });
    if (stek.length+counterOfUnpairedBrackets == 0) {
        return true;
    } else {
        return false;
    }
}
