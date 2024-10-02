function add(number) {
    if(number === ""){
        return 0;
    } 
    return number.split(",").reduce((sum, curr) => sum + Number(curr), 0);
}
module.exports = add;