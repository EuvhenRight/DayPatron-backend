import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ImageSchema = new Schema({
	url: String,
})

const SpecificationSchema = new Schema({
	en: {
		text: String, // English specification text description
		url: String, // English specification image URL
	},
	ua: {
		text: String, // Ukrainian specification text description
		url: String, // Ukrainian specification image URL
	},
})

const FaqSchema = new Schema({
	question_1: {
		en: { Q: String, A: String },
		ua: { Q: String, A: String },
	},
	question_2: {
		en: { Q: String, A: String },
		ua: { Q: String, A: String },
	},
	question_3: {
		en: { Q: String, A: String },
		ua: { Q: String, A: String },
	},
	question_4: {
		en: { Q: String, A: String },
		ua: { Q: String, A: String },
	},
})

const dayPatronData = new Schema({
	id: Number,
	article: String,
	linkName: String,
	name: {
		en: String,
		ua: String,
	},
	UTP: {
		en: String,
		ua: String,
	},
	specification: SpecificationSchema,
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
	benefits: {
		en: [String],
		ua: [String],
	},
	ingredients: {
		en: String,
		ua: String,
	},
	shelfLife: {
		en: String,
		ua: String,
	},
	faq: FaqSchema,
	category: String,
	tradeMarkImage: String,
})

const dayPatron = mongoose.model('dayPatronData', dayPatronData)

export default dayPatron
