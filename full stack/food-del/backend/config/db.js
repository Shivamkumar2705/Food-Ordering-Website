import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('/*mongodb link with password*/').then(()=>console.log("DB Connected"));
   //you should use your mongoDB link and password in line5
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.