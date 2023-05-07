require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express();
const cookieParser = require("cookie-parser")


app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(bodyParser.json());
app.use(cookieParser())

//declare PORT
const PORT = process.env.PORT || 8070;

//Routes file paths
const user_router = require("./routes/user-routes");
// const email_router = require("./routes/email-routes")
const commentRouter = require("./routes/comment-routes");
const complaintRouter = require("./routes/complaint-routes");
const feedbackRouter = require("./routes/feedback-route");
//routes are declared here
app.use('/User', user_router)
//app.use('/email', email_router)

app.use("/comment", commentRouter);
app.use("/feedback",feedbackRouter);
app.use("/complaint", complaintRouter);


//connect mongoDB
mongoose.connect(process.env.link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

 
 const connection = mongoose.connection;
 connection.once("open", () => {
     console.log("MongoDB Connection Success!");
 });

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}`)
})


 