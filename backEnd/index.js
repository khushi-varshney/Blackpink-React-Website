import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(
  {
    origin: ["https://blackpink-mu.vercel.app/"],
    methods:["POST", "GET"],
    credentials: true
  }
));

const DB = "mongodb+srv://user:koHKbEuxFTqC6OSk@cluster0.4lsix.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(DB, {
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

// app.get("/", (req,res)=>{
//   res.json("Hello")
// })

app.listen(9002, () => {
  console.log("Be started at Port 9002");
});


// mongodb+srv://user:<db_password>@cluster0.4lsix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0