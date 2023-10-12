
function values(obj){
    const valueArray = []

    for(const prop in obj){
        if(obj.hasOwnProperty(prop)){
            valueArray.push(obj[prop])
        }
    }

    return valueArray;

}

module.exports = { values }

