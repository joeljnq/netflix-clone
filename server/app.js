import express from "express";
import User from "./models/userModel.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 1234;
// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.post("/register", async(req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
        return res.status(400).json({message: 'Email and password are required'})
  }
  if (await User.isEmailTaken({email}) === true) {
    return res.status(400).json({ message: "Email is already taken" });
  }
    const user = await User.createUser({ email, password });
    console.log(user);
    
    return res.json({ id: user.id });
});

app.post("/login", async (req, res) => {
try{

    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    
    const user = await User.findUser({ email, password });
    
    if (user) {
        res.json({ id: user.id });
    } else {
        res.json({ message: "User not found" });
    }
}catch(error){
    res.status(500).json({message: 'Internal server error '})
}
});

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
    
})
