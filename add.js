function add(number) {
    if(number === ""){
        return 0;
    } 

    var delimiter = /[,\n]/;
    if(number.startsWith("//")){
        const delimiterEndIndex = number.indexOf("\n");
        delimiter = number.substring(2, delimiterEndIndex);
        number = number.substring(delimiterEndIndex+1);
    }

    const numbers = number.split(delimiter);

    const sum = numbers.reduce((acc, curr) => {
        const num = Number(curr);
        if (num < 0) {
            const negativeNumbers = numbers.filter(n => Number(n) < 0).join(", ");
            throw new Error(`Negative numbers not allowed: ${negativeNumbers}`);
        }
        return acc + num;
    }, 0);

    return sum;
}

module.exports = add;