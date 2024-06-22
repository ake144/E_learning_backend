
class AuthenticationError extends Error{
    constructor(obj){
        super()
        this.message=obj.message
        this.statusCode=obj.status
    }
}

module.exports={
    AuthenticationError
}