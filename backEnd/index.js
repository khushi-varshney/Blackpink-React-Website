import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/myLoginRegisterDB", {
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

app.listen(9002, () => {
  console.log("Be started at Port 9002");
});
