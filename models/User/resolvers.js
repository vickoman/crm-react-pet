const User = require('./User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate token
const generateToken = (user, secret, expiration) => {
    const { id, name, lastName, email } = user;
    return jwt.sign({ id, name, lastName, email }, secret, { expiresIn: expiration });
};

// Authentication
const auth = async (_, { input }) => {
    const { email, password } = input;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User Does not exists');
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
        throw new Error('Password is incorrect');
    }
    return {
        token: generateToken(user, process.env.SECRET, '24h')
    }
};

// Create user
const createUser = async (_, { input }, ctx, info) => {
    // check if user exists
    const { email, password } = input;
    const user = await User.findOne({ email });
    if (user) {
        throw new Error('User already exists');
    }

    // Create hash for password
    const salt =  await bcrypt.genSalt(10);
    input.password = await bcrypt.hash(password, salt);

    // save user in db
    try {
        const user = new User(input);
        user.save();
        return user;
    } catch (err) {
        console.log(err);
    }
};

const getUsers = async () => {
    return User.find();
};

const getUser = async (_, { token }) => {
    const userId = await jwt.verify(token, process.env.SECRET);
    return userId;
};

module.exports = {
    auth,
    createUser,
    getUsers,
    getUser
}
