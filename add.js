function add(number) {
    if(number === ""){
        return 0;
    } 
    const delimiter = /[,\n]/;
    return number.split(delimiter).reduce((sum, curr) => sum + Number(curr), 0);
}

module.exports = add;