import mongoose, { mongo } from "mongoose";
const AlternativeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    countryOrigin: {
      type: String,
      required: true,
    },
    rating: {
        type: Number,
        required: true
    }
  });
  const BoycottSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    articleWhy: {
      type: String,
      required: true,
    },
    articleCompare: {
        type: String,
        required: true
    }
  });

const BrandModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type :{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    boycottReason: BoycottSchema,
    countryOrigin: {
        type: String,
        required: true
    },
    alternatives: [AlternativeSchema]
})

export default new (mongoose.model as any)("brand", BrandModel)