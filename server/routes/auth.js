import e from "express";
import Signup from "../models/Signup.mongodb.js";
import bcrypt from "bcryptjs";
const router = e.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password, role, mobileNumber } = req.body;
        // check Does email exist
        const existing = await Signup.findOne({ email });
        if (existing) return res.status(400).json({ msg: 'Email already exists' });

        // hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Register User
        const newUser = new Signup({ email, passwordHash, role, mobileNumber });
        await newUser.save();

        res.status(201).json({ msg: "User registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
})

// Login
router.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body;
        
        // check Email
        const checkUser = await Signup.findOne({email});
        if(!checkUser) return res.status(400).json({msg: 'Invalid Credential'});

        // check Password
        const checkPassword = await checkUser.isPasswordCorrect(password);
        if(!checkPassword) return res.status(400).json({msg: "Invalid Creditional"});

        // Store in session
        req.session.user = {
            email: checkUser.email,
            role: checkUser.role,
            mobileNumber: checkUser.mobileNumber
        }

        res.json({msg : 'Login Successfully', User: req.session.user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
})
export default router;