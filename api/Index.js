import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

// Connect to MongoDB
mongoose
  .connect('process.env.MONGO')
  .then(() => {
    console.log('Connected to MongoDB');
  })

  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

 app.use("/api/user", userRoutes);
 app.use("/api/auth", authRoutes)
