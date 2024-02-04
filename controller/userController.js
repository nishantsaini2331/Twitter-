const User = require("../model/userModel")


const registerUser  = async (req, res) => {
    try {
        const data = req.body
        const newUser = await User.create(data)
        
        return res.status(200).json({
            user : newUser
        })

    } catch(err){
        console.log(err)
    }

}

module.exports = {
    registerUser
}