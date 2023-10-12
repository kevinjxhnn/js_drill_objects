function defaults(obj, defaultProps) {

    for(let prop in defaultProps){
        if(defaultProps.hasOwnProperty(prop) && obj[prop] === undefined){
            obj[prop] = defaultProps[prop]
        }

    }

    return obj
}

module.exports = { defaults }