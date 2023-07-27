import express from "express";
import cors from "cors";
// import fs from "fs";
import connectDB from "./connect.js";
import dayPatron from "./models/DayPatronData.js";

const app = express();
const port = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

connectDB();

app.get("/products", async (req, res) => {
  try {
    const allProducts = await dayPatron.find();
    res.json(allProducts);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    // Find the product with the specified "id"
    const product = await dayPatron.findOne({ id: productId });

    if (product) {
      // Product found, send it as the response
      res.json(product);
    } else {
      // Product not found, send an error response
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error finding product:', error);
    // If an error occurs, send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});