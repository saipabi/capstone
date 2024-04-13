import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD; 

// const Connection = () => {
//     const DB_URI = "mongodb+srv://rajarajeshrajendran89:<password>@cluster0.br0zagv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//     // `mongodb+srv://${USERNAME}:${PASSWORD}@capstone.waxpweh.mongodb.net/`;
//     try {
//         mongoose.connect(DB_URI );
//         mongoose.set('strictQuery', false);
//         console.log('Database connected sucessfully');
//     } catch (error) {
//         console.log('Error while connecting with the database ', error.message)
//     }
// }

process.env.DB_URI
const Connection = () => { const DB_URI = "mongodb+srv://user:2eelCUtAIUEamZDp@capstone.waxpweh.mongodb.net/?retryWrites=true&w=majority&appName=capstone";
mongoose.connect(DB_URI).then(() => {
    console.log("connected")

}).catch((e)=> {
    console.log("not connected", e.message)

});
};

export default Connection;