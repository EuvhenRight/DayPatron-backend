import express from 'express';
import cors from 'cors';
// import fs from "fs";
import connectDB from './connect.js';
import dayPatron from './models/DayPatronData.js';

const app = express();
const port = process.env.PORT || 3333;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

connectDB();

app.get('/products/:lang', async (req, res) => {
  try {
    const lang = req.params.lang; // Use req.params.lang to get the language from the URL

    const products = await dayPatron.find({}, '-_id -__v').lean();

    const productsInSelectedLanguage = products.map((product) => {
      const selectedLanguageProduct = {
        ...product,
        name: product.name[lang],
        specification: product.specification[lang],
        description: product.description[lang],
        useTo: product.useTo[lang],
        composition: product.ingredients[lang],
        shelfLife: product.shelfLife[lang],
        volume: product.volume[lang],
        faq: {
          question_1: product.faq.question_1[lang],
          question_2: product.faq.question_2[lang],
        },
      };
      return selectedLanguageProduct;
    });
    res.json(productsInSelectedLanguage);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/products/:lang/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const lang = req.params.lang;

    // Find the product with the specified "id" and matching "lang"
    const product = await dayPatron.findOne({ id: productId }).lean();

    if (product) {
      // Extract the language-specific information based on the "lang" parameter
      const productInSelectedLanguage = {
        ...product,
        name: product.name[lang],
        specification: product.specification[lang],
        description: product.description[lang],
        useTo: product.useTo[lang],
        composition: product.ingredients[lang],
        shelfLife: product.shelfLife[lang],
        volume: product.volume[lang],
        faq: {
          question_1: product.faq.question_1[lang],
          question_2: product.faq.question_2[lang],
        },
      };
      res.json(productInSelectedLanguage);
    }
  } catch (error) {
    console.error('Error finding product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
