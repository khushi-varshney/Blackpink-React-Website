import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(
  {
    origin: ["https://blackpink-mu.vercel.app/"],
    preflightContinue: true,
    methods:["POST", "GET"],
    credentials: true,
    "headers": [
              { "key": "Access-Control-Allow-Credentials", "value": "true" },
              { "key": "Access-Control-Allow-Origin", "value": "https://blackpink-mu.vercel.app/" },
              { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
    ]
  }
));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const DB = "mongodb+srv://user:koHKbEuxFTqC6OSk@cluster0.4lsix.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect("mongodb://0.0.0.0:0/mernstack", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password} = req.body
  User.find({email: email}).then((user)=>{
    if(user){
        if(password === user[0].password){
        res.send({message: "Login Successfully", user:user})
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

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      })
      user.save().then(()=>{
          res.send({ message: "Successfully Registered" });
        }
      );
    }
  }).catch((error)=>{
    res.send(404, "BAD REQUEST");
  });
});

app.get("/",cors(), (req,res)=>{
  res.json("Hello")
})

app.listen(9002, () => {
  console.log("Be started at Port 9002");
});


// mongodb+srv://user:<db_password>@cluster0.4lsix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0