function add(number) {
    if(number === ""){
        return 0;
    } 
    else if(!number.includes(",")){
        return parseInt(number);
    }
}
module.exports = add;