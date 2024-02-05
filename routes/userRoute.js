const express = require("express");
const { registerUser, signIn } = require("../controller/userController");
const router = express.Router();

router.post('/register' , registerUser  )
router.get('/login' , signIn  )


module.exports = router