import mongoose from "mongoose";


async function mongoDB(){
    try{
        await mongoose.connect(process.env.MONGO_SECRET)
        console.log("Mongoose connected successfully....")
    }catch(err){
        console.log("Error with database connection!!!!");
        console.log(err)
    }
}

export default mongoDB;