import mongoose from "mongoose";

export const ConnectDB = async() =>{

    await mongoose.connect('mongodb+srv://ayushdwivedi0507:1BHJ6euyd84Lqp5a@cluster0.rxiw7.mongodb.net/blogapp')
    console.log("DB Connected");
}