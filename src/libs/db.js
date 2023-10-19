import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('Error in connecting to MongoDB:', error);
    throw new Error('Error in connecting to MongoDB.');
  }
};

export default connectDB;



// import mongoose from "mongoose";


// if (!process.env.MONGO_URL) {
//   throw new Error("process.env.MONGO_URL must be defined");
// }

// export const connectDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URL);
//     if (connection.readyState === 1) {
//       console.log("MongoDB Connected");
//       return Promise.resolve(true);
//     }
//   } catch (error) {
//     console.error(error);
//     return Promise.reject(error);
//   }
// };
