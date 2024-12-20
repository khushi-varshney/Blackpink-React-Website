import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// app.use(cors());
// app.use(cors({
//   origin: ['https://blackpink-mu.vercel.app/', 'http://localhost:5173/'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

dotenv.config();
const DB=process.env.MONGODB_URI;
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const User =  mongoose.model('User', userSchema);

//Routes
app.post("/login", async(req, res) => {
  const { email, password} = req.body
  User.find({email: email}).then((user)=>{
    if(user){
      const isValidPassword = bcrypt.compareSync(password, user[0].password);
      if(isValidPassword){
      res.send({message: "Login Successfully",user})
      }else{
        res.send({message : "Incorrect Password"})
      }
    }else{
      res.send({message: "User Not Registered"})
    }
  }).catch((error)=>{
    res.send({message: "User Not Registered"});
  });
});

app.post("/register", async(req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      // res.send({ message: "User Already Registered"});
      res.send({message: "User Already Registered", user})
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(password, salt);
      const user = new User({
        name,
        email,
        password:hashedpassword,
      })
      user.save().then(()=>{
          res.send({ message: "Successfully Registered"});
        }
      );
    }
  }).catch((error)=>{
    res.send(404, "BAD REQUEST");
  });
});

app.get("/", (req,res)=>{
  res.json("Hello")
})

app.listen(9002, () => {
  console.log("Be started at Port 9002");
});

