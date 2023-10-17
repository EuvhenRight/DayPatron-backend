import mongoose from 'mongoose';
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
});

const SpecificationSchema = new Schema({
  en: {
    text: String, // English specification text description
    url: String, // English specification image URL
  },
  ua: {
    text: String, // Ukrainian specification text description
    url: String, // Ukrainian specification image URL
  },
});

const dayPatronData = new Schema({
  id: Number,
  article: Number,
  name: {
    en: String,
    ua: String,
  },
  specification: { SpecificationSchema },
  description: {
    en: String,
    ua: String,
  },
  useTo: {
    en: String,
    ua: String,
  },
  image: [ImageSchema],
  volume: {
    en: [String],
    ua: [String],
  },
  benefits: [String],
  ingredients: {
    en: String,
    ua: String,
  },
  shelfLife: {
    en: String,
    ua: String,
  },
  faq: {
    en: String,
    ua: String,
  },
  category: String,
  tradeMarkImage: String,
});

const dayPatron = mongoose.model('dayPatronData', dayPatronData);

export default dayPatron;
