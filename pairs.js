
function pairs(obj){
    const result = []

    for(const prop in obj){
        let pair = []

        if(obj.hasOwnProperty(prop)){
            pair.push(prop)
            pair.push(obj[prop])
        }

        result.push(pair)
    }

    return result
}


module.exports = { pairs }