const User = require("../model/userModel");

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await User.create(data);

        return res.status(200).json({
            user: newUser,
        });
    } catch (err) {
        console.log(err);
    }
};

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const checkUser = await User.findOne({ username });
        if (!checkUser) {
            return res.status(300).json({
                message: "User not find",
            });
        }
        console.log(checkUser);
        const isMatch = checkUser.comparePass(password);
        if (!isMatch) {
            return res.status(300).json({
                message: "Password not match",
            });
        }
        return res.status(200).json({
            message: "Sign in successfully",
        });



    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    registerUser,
    signIn,
};
