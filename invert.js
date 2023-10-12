function invert(obj){
    const invertedObject = {}

    for(const prop in obj){
        
        if(obj.hasOwnProperty(prop)){
            invertedObject[obj[prop]] = prop

        }
        
    }

    return invertedObject
}

module.exports = {invert}