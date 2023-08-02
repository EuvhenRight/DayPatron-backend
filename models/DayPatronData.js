import mongoose from 'mongoose';
import fs from 'fs';
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
});

const dayPatronData = new Schema({
  id: Number,
  article: Number,
  name: String,
  description: String,
  useTo: String,
  image: [ImageSchema],
  volume: [String],
  benefits: [String],
  composition: String,
  shelfLife: String,
  category: String,
  tradeMarkImage: String,
});

const dayPatron = mongoose.model('dayPatronData', dayPatronData);

export default dayPatron;
