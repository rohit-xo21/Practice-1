const User = require('../models/userModel'); // Import the User model

const signup = async (req, res) => {
    const { name, email, password, dateOfBirth } = req.body; // Extract variables from request body

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send("User already exists");
        }
        const newUser = new User({
            name,
            email,
            password,
            dateOfBirth
        });
        await newUser.save();
        res.status(201).send({ data: newUser, message: "User created successfully" });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { signup };