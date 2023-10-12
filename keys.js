
function keys(obj) {
    let keys = []

    for(const property in obj){
        if(obj.hasOwnProperty(property)){
            keys.push(property)
        }
    }

    return keys

}

module.exports = { keys }
