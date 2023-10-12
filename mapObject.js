function mapObject(obj, cb){

    let result = {}

    for(const prop in obj){
        if(obj.hasOwnProperty(prop)){
            result[prop] = cb(obj[prop])
        }
    }

    return result
}

module.exports = {mapObject}
