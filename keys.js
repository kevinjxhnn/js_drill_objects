
function keys(obj) {
    let keysArray = []

    for(const property in obj){
        if(obj.hasOwnProperty(property)){
            keysArray.push(property)
        }
    }

    return keysArray

}

module.exports = { keys }
