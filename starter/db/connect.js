const mongoose=require("mongoose")

const connectionString ="mongodb+srv://<username>:<password>@nodeexpressprojects.uj0ryag.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects"
 const connectDB=(url)=>{
    return mongoose.connect(connectionString,{
        use
    })
 }
mangoosen
    .connect(connectionString)
    .then(()=>console.log('CONNECTED TO THE DB.....'))
    .catch((err)=>console.log(err))